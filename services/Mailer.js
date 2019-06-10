const sendgrid = require('sendgrid')
const helper = sendgrid.mail
const keys = require('../config/keys')

// We have to set this up as a class:
class Mailer extends helper.Mail {
  constructor({ fromemail, recipients, subject }, content) {
    super()

    // All of the following is a rule set by sendgrid, it must look like this:
    this.sgApi = sendgrid(keys.sendGridKey)
    this.from_email = new helper.Email(fromemail)
    this.subject = subject;
    // Text/html indicates that we would like to show some html as the body content is the body.
    this.body = new helper.Content('text/html', content)
    this.recipients = this.formatAddresses(recipients)

    // The extended helper.Mail has the following built-in functions. We HAVE TO call it with the
    // body.
    this.addContent(this.body)
    // This with the helper method is a mystery, we should just follow along with the doc.
    this.addClickTracking()
    this.addRecipients()
  }

  formatAddresses(recipients) {
    return recipients.map(({ email }) => {
      return new helper.Email(email)
    })
  }

  addClickTracking() {
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking)
    this.addTrackingSettings(trackingSettings)
  }

  addRecipients() {
    const personalize = new helper.Personalization();

    this.recipients.forEach(recipient => {
      personalize.addTo(recipient)
    })
    this.addPersonalization(personalize)
  }

  // A function that will communicate the entire mailer off to the sendgrid API:
  async send() {
    const request = this.sgApi.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: this.toJSON()
    })

    const response = await this.sgApi.API(request);
    return response;
  }
}

module.exports = Mailer;
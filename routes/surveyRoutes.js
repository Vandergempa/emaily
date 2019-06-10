const _ = require('lodash')
const { Path } = require('path-parser')
const { URL } = require('url')
const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')
const requireCredits = require('../middlewares/requireCredits')
const Mailer = require('../services/Mailer')
const surveyTemplate = require('../services/emailTemplates/surveyTemplate')

const Survey = mongoose.model('surveys')

module.exports = app => {
  app.get('/api/surveys', requireLogin, async (req, res) => {
    // The request still has the user profile thanks to passport
    const surveys = await Survey.find({ _user: req.user.id })
      // We are going tell mongoose not to return that big list of recipients in the response.
      // This is called: projection, whitelisting, blacklisting data, etc.
      .select({ recipients: false });
    res.send(surveys)
  })

  app.get('/api/surveys/:surveyId/:choice', (req, res) => {
    res.redirect('/thankyou');
  })
  // Basically after we run the first filter command, it is useless to filter again for undefined.
  // It is assumed that the req.body we get back contains an array of object for each event, which 
  // is not the actual case as there is a seperate array for each event.
  app.post('/api/surveys/webhooks', (req, res) => {
    // the : colons tell the Path command to extract those parts
    const p = new Path('/api/surveys/:surveyId/:choice')

    const events = req.body
      .filter(event => event.email && event.url && event.event === 'click')
      .map((event) => {
        console.log(event, "This is the list of events, at least it should be")
        // Instead of splitting the string we can just use the URL function to get the route of 
        // the url:
        const pathname = new URL(event.url).pathname
        // If we can't extract values from p, the test function will return null!
        const match = p.test(pathname)
        if (match) {
          return { email: event.email, surveyId: match.surveyId, choice: match.choice }
        }
      })
      // Here we check if we have any undefined in the array of objects.
      .filter((event) => {
        return event !== undefined
      })
    // Here we remove the duplicates from the array of objects.
    // We tell lodash to check compactEvents and look at every element with the 'email' and 'surveyId'
    // property, and if there are any duplicates just remove them!
    _.uniqBy(events, 'email', 'surveyId')
      // Another way of doing it without lodash:
      //   .reduce((acc, curr) => {
      //     if (acc.length === 0 || acnpm run devc[acc.length-1] !== curr) {
      //         acc.push(curr);
      //     }
      //      return acc;       
      //  }, []);
      .forEach(({ surveyId, email, choice }) => {
        // Go through the entire survey collection and find the instance based on the criteria - findOne
        // However we use updateOne instead. Find the element and then update that one.
        // $elemmatch is only valid for subdocument collections!
        // Important thing here: mongo will process this update, we don't fetch the record and then saving
        // it back (that would be a very long process)
        Survey.updateOne({
          _id: surveyId,
          recipients: {
            $elemMatch: { email: email, responded: false }
          }
        }, {
            // After the query above is done and the element is found, do the following to it:
            // $inc is a mongo operator, [choice] means with the brackets: we do not know if it is
            // going to be a yes or no, but when we know, increment it exactly by 1
            $inc: { [choice]: 1 },
            // .$. can be used to substitute the $elemMatch used above. Meaning we want to set the
            // responded to true for elements got back from the query above.
            // The "" after $set means we would like to update an embedded document!!!
            $set: { 'recipients.$.responded': true, 'recipients.$.respondedWith': choice },
            lastResponded: Date.now()
            // Similarly to .save():
          }).exec();
      })

    res.send({})
  })

  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    const { title, subject, fromemail, body, recipients } = req.body;

    // We are creating an instance of the survey:
    const survey = new Survey({
      title: title,
      subject: subject,
      fromemail: fromemail,
      body: body,
      // We have to make sure to return an array of objects, not an array of strings.
      recipients: recipients.split(',').map(email => {
        return {
          email: email.trim()
        }
      }),
      // This id is auto generated by mongoose:
      _user: req.user.id,
      // Date.now() returns unix time, while New Date() returns server time.
      dateSent: Date.now()
    })
    // So at any time we want to SEND OUT AN EMAIL, we pass in ANY object (survey) that must contain
    // a subject and recipients property and as a second arg the body of the email (surveyTemplate).
    const mailer = new Mailer(survey, surveyTemplate(survey));

    try {
      await mailer.send()
      await survey.save()
      // 1 credit deducted for succesfully sending out an email
      req.user.credits -= 1
      const user = await req.user.save();
      // Sending back the updated user instance
      res.send(user)
    } catch (err) {
      res.status(422).send(err)
    }
  })

  app.post('/api/surveys/delete', requireLogin, async (req, res) => {
    const deletedSurvey = await Survey.deleteOne({ _id: req.body.id })
    res.send(deletedSurvey)
  })
}
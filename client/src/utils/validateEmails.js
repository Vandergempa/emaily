import { re, updatedEmails } from './functions'

export default (emails) => {
  const invalidEmails = updatedEmails(emails).split(',')
    .map(email => email.trim())
    // If the email is valid the expression return true, filter keeps it in array
    .filter(email => re.test(email) === false)

  if (invalidEmails.length) {
    return `The following email adresses are invalid: ${invalidEmails}`
  }
}


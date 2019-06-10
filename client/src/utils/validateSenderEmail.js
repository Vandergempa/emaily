import { re, updatedEmails } from './functions'

export default (emails) => {
  const invalidEmails = updatedEmails(emails).trim()

  if (re.test(invalidEmails) === false) {
    return `The email address is invalid`
  }
}
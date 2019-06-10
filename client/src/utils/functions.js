const re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// Dealing with trailing commas:
const updatedEmails = (emails) => {
  if (emails.charAt(emails.length - 1) === ",") {
    return emails.slice(0, emails.length - 1)
  } else {
    return emails
  }
}

export { re, updatedEmails }
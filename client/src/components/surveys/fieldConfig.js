export default [
  { label: 'Survey Title (The main header of the survey too, your product name can be a good title)', name: 'title', errorMessage: 'Please provide a title', placeholder: 'Title' },
  { label: 'Subject Line', name: 'subject', errorMessage: 'Please provide a subject', placeholder: 'Subject' },
  { label: 'Sender\'s email', name: 'fromemail', errorMessage: "Please provide sender's email address", placeholder: 'Sender\'s email' },
  { label: 'Email body (The client will be able to reply to this by clicking yes or no)', name: 'body', errorMessage: 'Please provide an email body', placeholder: 'Content' },
  { label: 'Recipient List', name: 'recipients', errorMessage: "Please provide valid email addresses separated by a comma", placeholder: 'Email adresses' }
]

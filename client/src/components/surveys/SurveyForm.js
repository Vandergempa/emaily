// SurveyForm shows a form for a user to add input
import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import SurveyField from './SurveyField'
import { Link } from 'react-router-dom'

import validateEmails from '../../utils/validateEmails'
import validateSenderEmail from '../../utils/validateSenderEmail'
import fieldConfig from './fieldConfig'

class SurveyForm extends Component {
  renderFields() {
    // We are passing our own component to the redux field
    // To pass down custom props, we jsut have to add them to the field component
    return fieldConfig.map(({ name, label, placeholder }, index) => {
      return <Field key={index} component={SurveyField} type="text" name={name} label={label} placeholder={placeholder} />
    })
  }

  // props.handleSubmit is a function that is provided by the reduxForm helper at the bottom
  // For this we have to pass on our own custom function.
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="btn left white-text waves-effect waves-light green reviewpagebuttons">
            Cancel
          </Link>
          <button type="submit" className="btn right white-text waves-effect waves-light reviewpagebuttons">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    )
  }
}

// The values object contains title, subject, body and email
const validate = (values) => {
  // If errors has an item, react form will stop the submit process.
  const errors = {}

  errors.recipients = validateEmails(values.recipients || "")
  errors.fromemail = validateSenderEmail(values.fromemail || "")

  fieldConfig.map(({ name, errorMessage }, index) => {
    if (!values[name]) {
      errors[name] = errorMessage
    }
  })

  return errors
}

export default reduxForm({
  validate: validate,
  form: 'surveyForm',
  // This is the way to make the input data persist
  destroyOnUnmount: false
})(SurveyForm)
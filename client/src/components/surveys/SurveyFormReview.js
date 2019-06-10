import React from 'react'
import { connect } from 'react-redux'

import fieldConfig from './fieldConfig'
import { submitSurvey } from '../../actions/authActions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {
  const renderFields = () => {
    return fieldConfig.map(({ name, label }, index) => {
      return (
        <div key={index}>
          <label>{label}</label>
          <div className="font2">{formValues[Object.keys(formValues)[index]]}</div>
        </div>
      )
    })
  }
  return (
    <div>
      <h5 className="confirm">Please review your entries:</h5>
      {renderFields()}
      <button className="btn left waves-effect waves-light yellow darken-3 reviewpagebuttons" onClick={onCancel}>
        Back
      </button>
      <button
        // If we don't putit in an arrow function, it will be called instantly !!ERROR!!
        onClick={() => submitSurvey(formValues)}
        type="submit"
        className="btn right green white-text waves-effect waves-light reviewpagebuttons">
        Send Survey
    <i className="material-icons right">email</i>
      </button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    formValues: state.form.surveyForm.values
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    submitSurvey: (values) => dispatch(submitSurvey(values))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyFormReview)
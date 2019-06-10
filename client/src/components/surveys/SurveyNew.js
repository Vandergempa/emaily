// SurveyNew shows SurveyForm and SurveyFormReview
import React, { useState } from 'react'
import { reduxForm } from 'redux-form'

import Header from '../Header'
import SurveyForm from './SurveyForm'
import SurveyFormReview from './SurveyFormReview'

const SurveyNew = () => {
  const [showFormReview, setshowFormReview] = useState(false)

  const renderContent = () => {
    if (showFormReview) {
      return <SurveyFormReview onCancel={() => setshowFormReview(false)} />
    }
    return <SurveyForm onSurveySubmit={() => setshowFormReview(true)} />
  }

  return (
    <div>
      <Header />
      <div className="container">
        {renderContent()}
      </div>
    </div>
  )
}

// To clear out the form values after going back to the main page we have to connect here as well:
export default reduxForm({
  form: 'surveyForm'
})(SurveyNew)
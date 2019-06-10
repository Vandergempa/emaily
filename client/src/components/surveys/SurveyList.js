import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchSurveys, fetchDeleteSurvey } from '../../actions/surveysActions'
import PieChart from '../PieChart'

const SurveyList = (props) => {

  useEffect(() => {
    props.fetchSurveys();

  }, [])

  const onDelete = (index) => {
    props.fetchDeleteSurvey(props.surveys[index]._id)
  }

  const renderSurveys = () => {
    return props.surveys.map((survey, index) => {
      return (
        <div className="dashboard card darken-1" key={survey._id}>
          <div className="card-content">
            <h2 className="title bold green-text text-lighten-1">{survey.title}</h2>
            <h4 className="subject">{survey.subject}</h4>
            <p className="body">
              {survey.body}
            </p>
            <div className="dates">
              <p className="sentondate teal-text text-lighten-1 bold">
                Sent on: {new Date(survey.dateSent).toLocaleDateString()}
              </p>
              {survey.lastResponded
                &&
                <p className="sentondate teal-text text-lighten-1 bold">
                  Last response on: {new Date(survey.lastResponded).toLocaleDateString()}</p>
              }
            </div>
          </div>
          <div className="chart card-action">
            {(survey.yes || survey.no)
              ?
              <div>
                <div className="deleteicon" onClick={() => { onDelete(index) }}>
                  <i className="material-icons">delete</i>
                </div>
                <PieChart yes={survey.yes} no={survey.no} />
              </div>
              :
              <div className="onelineflex">
                <p className="sentondate">Hold on just a bit more, no user feedback yet!</p>
                <div className="deleteicon" onClick={() => { onDelete(index) }}>
                  <i className="material-icons">delete</i>
                </div>
              </div>
            }
          </div>
        </div>
      )
    })
  }

  return (
    <div>
      {
        props.surveys.length
          ?
          renderSurveys()
          :
          <div className="emptytext">
            <i className="emptymailicon material-icons">email</i>
            <h1>There are no surveys to show yet</h1>
            <h3>Add one by clicking the button in the bottom right corner</h3>
          </div>
      }
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    surveys: state.surveys
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchSurveys: () => dispatch(fetchSurveys()),
    fetchDeleteSurvey: (id) => dispatch(fetchDeleteSurvey(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyList)
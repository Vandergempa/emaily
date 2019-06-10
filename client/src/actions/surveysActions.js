// A library to make ajax requests to a server
import axios from 'axios'
import sortSurveys from '../selectors/surveys'

export const addSurveys = (surveys) => ({
  type: 'ADD_SURVEYS',
  surveys
});

export const deleteSurvey = (id) => ({
  type: 'DELETE_SURVEY',
  id
});

export const fetchSurveys = () => {
  return async (dispatch) => {
    const res = await axios.get('/api/surveys')
    dispatch(addSurveys(sortSurveys(res.data, "decreasing")))
  }
}

export const fetchDeleteSurvey = (id) => {
  return async (dispatch) => {
    await axios.post('/api/surveys/delete', { id })
    await dispatch(deleteSurvey(id))
  }
}
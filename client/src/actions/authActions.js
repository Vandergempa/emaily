// A library to make ajax requests to a server
import axios from 'axios'
import { history } from '../components/App'

export const addUser = (ref) => ({
  type: 'ADD_USER',
  ref
});

export const fetchUser = () => {
  // thunk lets us use the dispatch function:
  return async (dispatch) => {
    const res = await axios.get('/api/current_user')
    dispatch(addUser(res.data))
  }
};

export const removeUser = () => ({
  type: 'REMOVE_USER',
});

export const signOut = () => {
  // thunk lets us use the dispatch function:
  return async (dispatch) => {
    await axios.get('/api/logout')
    dispatch(removeUser())
    history.push('/')
  }
};

export const handleToken = (token, description, amount) => {
  return async (dispatch) => {
    const res = await axios.post('/api/stripe', {
      description,
      amount,
      token
    });
    dispatch(addUser(res.data))
  }
};
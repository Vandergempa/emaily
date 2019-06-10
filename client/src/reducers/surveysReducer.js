const surveysReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SURVEYS':
      return action.surveys
    case 'DELETE_SURVEY':
      return state.filter((survey) => {
        return survey._id !== action.id
      })
    default:
      return state;
  }
};

export default surveysReducer;
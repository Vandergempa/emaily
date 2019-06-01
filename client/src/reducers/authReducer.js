const initialState = {
  user: null
}

const authReducer = (state = initialState , action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        user: action.ref || false
      }
    case 'REMOVE_USER':
      return {
        user: false
      }
    default:
      return state;
  }
};

export default authReducer;
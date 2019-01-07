const initialState = {
  tweets: [],
}
const makeSchoolReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'MAKE_SCHOOL':
    return {
      ...state,
      tweets: action.payload,
    };
    default:
    return state
  }
}

export default makeSchoolReducer;

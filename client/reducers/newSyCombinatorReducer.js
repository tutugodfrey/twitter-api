const initialState = {
  tweets: [],
}
const newSyCombinatorReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'NEW_SY_COMBINATOR':
    return {
      ...state,
      tweets: action.payload,
    };
    default:
    return state
  }
}

export default newSyCombinatorReducer;

const initialState = {
  tweets: [],
}
const yCombinatorReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'Y_COMBINATOR':
    return {
      ...state,
      tweets: action.payload,
    };
    default:
    return state;
  };
}

export default yCombinatorReducer;

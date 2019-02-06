const initialState = {
  settings: {},
}

const settingsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_SETTINGS':
    return {
      ...state,
      settings: action.payload,
    };
    default:
    return state;
  }
}

export default settingsReducer;

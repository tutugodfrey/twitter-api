const actions = {
  makeSchool: (data) => {
    return (
      {
      type: 'MAKE_SCHOOL',
      payload: data, 
    });
  },
  newSyCombinator: (data) => {
    return (
      {
      type: 'NEW_SY_COMBINATOR',
      payload: data, 
    });
  },
  yCombinator: (data) => {
    return (
      {
      type: 'Y_COMBINATOR',
      payload: data, 
    });
  },
  setSettings: (data) => {
    return (
      {
      type: 'SET_SETTINGS',
      payload: data
    });
  },
}

export default actions;

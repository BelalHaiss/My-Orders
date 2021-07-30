const reducer = (state, action) => {
  switch (action.type) {
    case 'setAlert':
      return [...state, action.payLoad];
    case 'clearAlert':
      return state.filter((alert) => alert.id !== action.payLoad);
    default:
      return state;
  }
};

export default reducer;

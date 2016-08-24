function reducer(state = {clothes: []}, action) {
  switch (action.type) {
    case "GETCLOTHES":
      return {
        clothes: action.clothes
      };
    default :
      return state;
  }
  return state;
}

module.exports = reducer;

function reducer(state = {clothes: []}, action) {
  switch (action.type) {
    case "GET_CLOTHES":
      return {
        clothes: action.clothes
      };
    default :
      return state;
  }
  return state;
}

module.exports = reducer;

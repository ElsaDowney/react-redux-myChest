function reducer(state = {clothes: []}, action) {
  switch (action.type) {
    case "GETCLOTHES":
      return {
        clothes: action.clothes
      };
  }
  return state;
}

module.exports = reducer;

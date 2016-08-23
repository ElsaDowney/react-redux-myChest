function reducer(state = {clothes: []}, action) {
  switch (action.type) {
    case "GETCLOTHES":
      return {
        clothes: action.clothes
      };
    case "DELETE":
      const index = state.clothes.find(cloth => cloth.id === action.c_id);
      state.clothes.splice(index,1);
      return {
        clothes: [...state.clothes]
      };
    default :
      return state;
  }
  return state;
}

module.exports = reducer;

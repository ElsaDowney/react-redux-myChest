const clothes = (state = [], action) => {
  switch (action.type) {
    case "GET_CLOTHES":
      return state = action.clothes;
    default :
      return state;
  }
  return state;
};

module.exports = clothes;

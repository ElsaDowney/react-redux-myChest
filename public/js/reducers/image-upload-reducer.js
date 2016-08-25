function reducer(state = {image:''}, action) {

  switch (action.type) {
    case "UPLOADIMAGE":
      return {
        image:action.imageName
      };
  }
  return state;
}

module.exports = reducer;


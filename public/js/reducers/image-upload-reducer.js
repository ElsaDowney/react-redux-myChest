function reducer(state = {image:''}, action) {
  switch (action.type) {
    case "UPLOADIMAGE":
      console.log('sdfghjk:');
      console.log(action.imageName);
      return {
        image:action.imageName
      };
  }
  return state;
}

module.exports = reducer;


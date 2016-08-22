function reducer(state = {toggle:'Login'}, action) {
  switch(action.type){
    case "Toggle":
      console.log(action);
      return {
        toggle : action.value
      };
  }
  return state.toggle;
}

module.exports = reducer;
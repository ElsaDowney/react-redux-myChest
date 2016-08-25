function reducer(state = {toggle: 'Login'}, action) {
  switch (action.type) {
    case "TOGGLE":
       console.log(action.value);
      return {
        toggle: action.value
      };
  }
  return state;
}
module.exports = reducer;

function reducer(state = {toggle: 'Login'}, action) {
  switch (action.type) {
    case "Toggle":
      return {
        toggle: action.value
      };
  }
  return state;
}
module.exports = reducer;
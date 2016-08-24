function reducer(state = {registerState: ''}, action) {
  switch (action.type) {
    case 'REGISTER_COMMIT':
      return {registerState: action.value};
  }

  return state;
}

module.exports = reducer;
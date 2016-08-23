function reducer(state = {registerState: ''}, action) {
  switch (action.type) {
    case 'RegisterCommit':
      return {registerState: action.value};
  }

  return state;
}

module.exports = reducer;
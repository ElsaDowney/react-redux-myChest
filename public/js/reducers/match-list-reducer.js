const matchList = (state = {matches: []}, action)=> {
  switch (action.type) {
    case 'SET_MATCH':
      return {matches: action.matches};
  }
  return state;
};
export default matchList;





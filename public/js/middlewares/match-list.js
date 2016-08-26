import request from 'superagent';
export default store => next => action => {
  if (action.type === 'GET_MATCH') {
    request.get('/matches')
      .end((err, res) => {
        next({type: 'SET_MATCH', matches: res.body});
      });
  }
  else
    next(action);
}
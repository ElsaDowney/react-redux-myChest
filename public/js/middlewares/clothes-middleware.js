import request from 'superagent';

export default store => next => action => {
  if (action.type === 'GETCLOTHES') {
    request.get('/clothes')
      .end((err, res) => {
        next({type: action.type, clothes: res.body.clo_list});
      });
  }
  else
    next(action);
};

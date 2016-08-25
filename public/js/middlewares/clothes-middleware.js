import request from 'superagent';

export default store => next => action => {
  if (action.type === 'GET_CLOTHES') {
    request.get('/clothes')
      .end((err, res) => {
        next({type: action.type, clothes: res.body});
      });
  } else if (action.type === "DELETE_CLOTH") {
    request.del('/clothes/' + action.c_id)
      .end((err, res)=> {
        next({type: "GET_CLOTHES", clothes: res.body});
      });
  } else if (action.type === "MATCH_CLOTHES") {
    request.post('/clothes/matches')
      .send(action.matches)
      .end((err, res)=> {
        next({type: ""})
      })
  } else
    next(action);
};

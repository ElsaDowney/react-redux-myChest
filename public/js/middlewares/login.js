import request from 'superagent';

export default store => next => action => {

  if (action.type === 'LOGIN') {

    request.post('/sessions')
      .send({userName: action.name,password:action.password})
      .end((err, res) => {
         next({type: action.type, value: res.body.value})
      });
  }
  else
    next(action);
};

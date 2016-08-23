import request from 'superagent';

export default store => next => action => {
  if (action.type === 'REGISTER_COMMIT') {

    console.log({username: action.username,password:action.password});

    request.post('/user')
      .send({username: action.username,password:action.password})
      .end((err, res) => {
        next({type: action.type, value: res.body})
      });
  }
  else
    next(action);
};

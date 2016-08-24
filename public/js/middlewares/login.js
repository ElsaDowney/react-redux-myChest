import request from 'superagent';

export default store => next => action => {

  if (action.type === 'LOGIN') {
    // console.log({name: action.name,password:action.password});

    request.post('/sessions')
      .send({name: action.name,password:action.password})
      .end((err, res) => {
         next({type: action.type, value: res.body.value})
      });
  }
  else
    next(action);
};

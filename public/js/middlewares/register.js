import request from 'superagent';

export default store => next => action => {
  if (action.type === 'REGISTER_COMMIT') {


    request.post('/user')
      .send({username: action.username,password:action.password})
      .end((err, res) => {
        // console.log(res.body);
        next({type: action.type, value: res.body.value})
      });
  }
  else
    next(action);
};

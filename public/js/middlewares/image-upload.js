import request from 'superagent';

export default store => next => action => {
  if (action.type === 'UPLOADIMAGE') {
    request.get('/upload')
      .attach('',action.imageFile)
      .end((err, res) => {
        next({type: action.type, imageFile: res.body});
      });
  }
  else
    next(action);
};

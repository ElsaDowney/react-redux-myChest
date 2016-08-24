import request from 'superagent';

export default store => next => action => {
  if (action.type === 'UPLOADIMAGE') {
    request.put('/upload')
      .attach("image-name",action.imageFile,action.imageFile.name)
      .end((err, res) => {
        console.log(res.body);
        console.log(res.text);
        next({type: action.type, imageFile: res.body});
      });
  }
  else
    next(action);
};

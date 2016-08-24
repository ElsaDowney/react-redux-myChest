import request from 'superagent';

export default store => next => action => {
  if (action.type === 'UPLOADIMAGE') {
    request.put('/upload')
      .attach("image-name",action.imageFile,action.imageFile.name)
      .end((err, res) => {
        console.log(res.body);
        console.log(typeof res.body);
        next({type: 'UPLOADIMAGE', imageName: res.body});
      });
  }
  else
    next(action);
};

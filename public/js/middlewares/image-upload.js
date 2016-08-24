import request from 'superagent';

export default store => next => action => {
  if (action.type === 'UPLOADIMAGE') {
    request.put('/upload')
      .attach("image-name",action.imageFile,action.imageFile.name)
      .end((err, res) => {
        if(err){
          console.log(err);
        }else{
          alert('图片上传成功！');
        }
        next({type: 'UPLOADIMAGE', imageName: res.body});
      });
  }
  else
    next(action);
};

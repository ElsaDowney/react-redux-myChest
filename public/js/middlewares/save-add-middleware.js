import request from 'superagent';

export default store => next => action => {
  if (action.type === 'SAVEADD') {

    request.post('/cloth')
      .send({cloItem:action.cloItem})
      .end((err, res) => {
          if(err) {
            console.log(err);
          }else {
            alert(res.body.value);
          }
        next({type:''});
      });
  }
  else
    next({type:''});
};

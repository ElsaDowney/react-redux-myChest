import request from 'superagent';

export default store => next => action => {
  if (action.type === 'GETCLOTHES') {
    request.get('/clothes')
      .end((err, res) => {
        next({type: action.type, clothes: res.body});
      });
  } else if (action.type === "DELETECLOTH") {
    request.del('/clothes/' + action.c_id)
      .end((err,res)=>{
        next({type:"GETCLOTHES",clothes:res.body});
    });
  }else
    next(action);
};

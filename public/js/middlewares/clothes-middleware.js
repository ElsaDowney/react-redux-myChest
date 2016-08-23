import request from 'superagent';

export default store => next => action => {
  if (action.type === 'GETCLOTHES') {
    request.get('/clothes')
      .end((err, res) => {
        next({type: action.type, clothes: res.body.clo_list});
      });
  } else if (action.type === "DELETECLOTH") {
    request.del('/clothes/' + action.c_id)
      .end((err,res)=>{
        console.log(res.body);
        next({type:"GETCLOTHES",clothes:res.body})
    });
  }
  else
    next(action);
};



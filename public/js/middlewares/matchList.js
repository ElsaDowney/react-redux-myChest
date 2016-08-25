import request from 'superagent';
export default store=>next=>action=>{
  if(action.type==='Match'){
    request.get('/match')
      .end((err, res)=> {
        next({type: 'GETMATCH', user: res.body});
      });
  }
  else
    next(action);
}
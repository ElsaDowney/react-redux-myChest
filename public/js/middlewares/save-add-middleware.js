import request from 'superagent';

import {browserHistory} from 'react-router';

export default store => next => action => {
  if (action.type === 'SAVEADD') {
    request.post('/cloth')
      .send({cloItem:action.cloItem})
      .end((err, res) => {
          if(err) {
            console.log(err);
          }else {
            alert(res.body.value);
            browserHistory.push('/ClothList');
          }
        next({type:''});
      });
  }
  else
    next(action);
};

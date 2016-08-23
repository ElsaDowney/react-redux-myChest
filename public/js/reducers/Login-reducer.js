export default (state={isLogin:false},action) => {
  switch (action.type){
    case 'LOGIN':
      return{
        isLogin:action.logined
      }
  }
  return state;
}
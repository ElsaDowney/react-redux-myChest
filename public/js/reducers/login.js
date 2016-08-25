export default (state={isLogin:''},action) => {
  switch (action.type){

    case 'LOGIN':
      return{
        isLogin:action.value
      }
  }
  return state;
}
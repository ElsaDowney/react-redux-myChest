export default (state={isLogin:''},action) => {
  switch (action.type){

    case 'LOGIN':

     // console.log(action.value);
      return{
        isLogin:action.value
      }
  }
  return state;
}
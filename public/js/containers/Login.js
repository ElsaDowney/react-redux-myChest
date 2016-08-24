import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import Login from "../components/Login";


const mapStateToProps = (state)=> {
  return {
    isLogin:state.value
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
      submit:(name,password)=>{
        // console.log(name);
        dispatch({type:'LOGIN',name,password})
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);






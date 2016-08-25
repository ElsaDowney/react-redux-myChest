import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import Register from "../components/Register";

const mapStateToProps = (state)=> {

  return {
    registerState: state.registerReducer.registerState
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCommit: (userName, password)=> {
      dispatch({type: "REGISTER_COMMIT", userName, password});
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);






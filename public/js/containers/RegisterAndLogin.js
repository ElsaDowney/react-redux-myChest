import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import RegisterAndLogin from "../components/RegisterAndLogin";

RegisterAndLogin.propTypes = {
  toggle: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired
};

const mapStateToProps = (state)=> {
  return {
    toggle: state.registerAndLogin.toggle
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onToggle: (value)=> {
      dispatch({type: "TOGGLE",value});
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterAndLogin);

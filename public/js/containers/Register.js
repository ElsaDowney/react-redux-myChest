import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import Register from "../components/Register";

// Register.propTypes = {
//   registerState: PropTypes.string.isRequired,
//   onCommit: PropTypes.func.isRequired
// };

const mapStateToProps = (state)=> {
  return {
    registerState: state.registerState
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCommit: (username, password)=> {
      // console.log({type: "REGISTER_COMMIT", username, password});

      dispatch({type: "REGISTER_COMMIT", username, password});
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);






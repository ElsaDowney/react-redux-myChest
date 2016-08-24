
import React, {Component, PropTypes} from "react";
import MatchList from '../components/matchList';
import {connect} from 'react-redux';


function mapStateToProps(state) {
  return {user:state.matchListReducer.user};
}

function mapDispatchToProps(dispatch) {
  return {
    onMatch:(userName)=>{
      dispatch({type:'Match',userName});
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MatchList);

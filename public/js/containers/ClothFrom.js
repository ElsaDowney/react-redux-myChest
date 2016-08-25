import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import ClothForm from "../components/ClothForm";

function mapStateToProps(state){
  return {
    image:state.imageUpload.image
  };
}

function mapDispatchToProps(dispatch){
  return {
    onSaveAdd:(cloItem) => {dispatch({type:'SAVEADD',cloItem})}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ClothForm);

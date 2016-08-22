import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import ClothList from "../components/ClothList";

function mapStateToProps(state){
  return {
    clothes:state.clothesReducer.clothes
  };
}

function mapDispatchToProps(dispatch){
  return {
    getClothes : ()=>{dispatch({type:"GETCLOTHES"});}
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ClothList);

import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import ClothList from "../components/ClothList";

function mapStateToProps(state){
  // console.log(state);
  return {
    clothes:state.clothesReducer.clothes
  };
}

function mapDispatchToProps(dispatch){
  return {
    getClothes : ()=>{dispatch({type:"GETCLOTHES"});},
    onRemove: (c_id)=>dispatch({type:"DELETECLOTH",c_id}),
    onMatchClothes :(matches)=>{dispatch({type:"MATCHCLOTHES",matches})}
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ClothList);

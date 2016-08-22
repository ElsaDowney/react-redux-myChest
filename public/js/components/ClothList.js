import React, {Component} from "react";
import {browserHistory} from 'react-router';
const Link = require('react-router').Link;

class ClothList extends Component{
  componentDidMount(){
    this.props.getClothes();
  }
  render(){
    console.log(this.props.clothes);
    const clothesText = this.props.clothes.map(cloth => <p>{cloth.image}</p>);
    return (
      <div>{clothesText}</div>
    )
  }
}

export default ClothList;

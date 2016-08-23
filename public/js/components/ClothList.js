import React, {Component} from "react";
import {browserHistory} from 'react-router';
const Link = require('react-router').Link;

class ClothList extends Component{
  componentDidMount(){
    this.props.getClothes();
  }

  mouseOver(){
    $('.a').mouseover(function(){
      $(this).next().css("opacity",0.7);
    });
    $('.delete-wrap').mouseover(function(){
      $(this).css("opacity",0.7);
    });
  }

  mouseOut(){
    $('.a').mouseout(function(){
      $(this).next().css("opacity",0);
    });
  }

  findClothesType(type,clothes){
    return  clothes.find(item => item.sort === type);
  }

  getAllSectionWithTig(clothes){
    const sectionClothes = clothes.allSections.map((section,index) => {
      const imgUrl = `../../images/image${section.image}.jpg`;
      return (
        <div className="imgSize" key={index}>
          <div className="img-wrap"></div>
          <img className="a" src={imgUrl}
               onMouseOver={this.mouseOver}
               onMouseOut={this.mouseOut}/>
          <div className="delete-wrap">
            <span className="glyphicon glyphicon-trash delete">
            </span>
          </div>
          <div className="select">
            <input type="radio" name={section.sort} className="input-select"  id="select"
                   value={section.c_id}
                   onClick={this.addWrap}/>
          </div>
        </div>
      )
    });
    return (
      <div>
        <span className="title-inline text-success">{clothes.sort}</span>
        <Link to="AddList">
          <button className="button button-action button-circle btn-add">
            <i className="fa fa-plus">
            </i>
          </button>
        </Link>
        <hr />
        {sectionClothes}
        <hr />
      </div>
    )
  }



  render() {
    const allColthes = this.props.clothes;
      const clothesWithClass = [];
      for(let clothes of allColthes){
        const element = this.findClothesType(clothes.sort,clothesWithClass);
        if (element) {
          element.allSections.push(clothes)
        }else {
          const clothesObj = {};
          const arr = [];
          arr.push(clothes);
          clothesObj.sort =clothes.sort;
          clothesObj.allSections = arr;
          clothesWithClass.push(clothesObj);
        }
      }
      const clothes = clothesWithClass.map(clothes => {
        return this.getAllSectionWithTig(clothes);
      });
      return (
        <div className="wrap-colthes">
          {clothes}
          <button className="btn-match btn btn-primary">搭配</button>
          <p className="btn-foot"><button className="btn btn-info">确认搭配</button></p>
          <p className="btn-foot"><button className="btn btn-info" disabled="disabled">点击添加类型</button></p>
        </div>
      )
  }
}


export default ClothList;

import React, {Component} from "react";
import {browserHistory} from 'react-router';
import ClothesTypeToTig from './ClothesType-toTig'
const Link = require('react-router').Link;

class ClothList extends Component {
  componentDidMount() {
    this.props.getClothes();
  }

  mouseOver() {
    $('.imgage').mouseover(function () {
      $(this).next().css("opacity", 0.7);
    });
    $('.delete-wrap').mouseover(function () {
      $(this).css("opacity", 0.7);
    });
  }

  mouseOut() {
    $('.imgage').mouseout(function () {
      $(this).next().css("opacity", 0);
    });
  }

  findClothesType(type, clothes) {
    return clothes.find(item => item.sort === type);
  }

  addWrap() {
    $("input:checked").parent().siblings(".img-wrap").css("display", "inline");
    $("input:not(:checked)").parent().siblings(".img-wrap").css("display", "none");
  }

  showAll() {
    $(".left-clothes").css("display", "inline");
  }

  matchClothes() {
    $(".input-select").show();
  }

  hiddenMatch() {
    $(".input-select").hide();
  }

  confirmMatch() {
    const matches = [];
    $("input:checked").each(function () {
      matches.push($(this).val())
    });
    alert("搭配成功");
    browserHistory.push('/Home');
  }

  getClothesWithClass(clothes) {
    const clothesWithClass = [];
    clothes.map(cloth => {
      const element = this.findClothesType(cloth.sort, clothesWithClass);
      if (element) {
        element.allSections.push(cloth)
      } else {
        const clothesObj = {};
        const arr = [];
        arr.push(cloth);
        clothesObj.sort = cloth.sort;
        clothesObj.allSections = arr;
        clothesWithClass.push(clothesObj);
      }
    });
    return clothesWithClass;
  }

  render() {
    const clothesWithClass = this.getClothesWithClass(this.props.clothes);
    const clothes = clothesWithClass.map(clothes => {
      return <ClothesTypeToTig clothes={clothes}
                               onRemove={this.props.onRemove}/>;
    });

    return (
      <div className="wrap-colthes">
        {clothes}
        <button className="btn-match btn btn-primary"
                onClick={this.matchClothes}
                onDoubleClick={this.hiddenMatch}>搭配
        </button>
        <p className="btn-foot">
          <button className="btn btn-info"
                  onClick={this.confirmMatch.bind(this)}>确认搭配
          </button>
        </p>
        <p className="btn-foot">
          <button className="btn btn-info" disabled="disabled">点击添加类型</button>
        </p>
      </div>
    )
  }
}

export default ClothList;

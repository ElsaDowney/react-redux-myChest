import React, {Component} from "react";
import ClothesTypeToTag from './ClothesTypeToTag';
import {browserHistory} from 'react-router';
const Link = require('react-router').Link;

class ClothList extends Component {
  componentDidMount() {
    this.props.getClothes();
  }

  findClothesType(type, clothes) {
    return clothes.find(item => item.sort === type);
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
    this.props.onConfirm(matches);
    alert("搭配成功");
    browserHistory.push('/Home');
  }

  getClothesWithClass(clothes) {
    const clothesWithClass = [];
    clothes.map(cloth => {
      const element = this.findClothesType(cloth.sort, clothesWithClass);
      if (element) {
        element.sections.push(cloth)
      } else {
        const clothesObj = {};
        const arr = [];
        arr.push(cloth);
        clothesObj.sort = cloth.sort;
        clothesObj.sections = arr;
        clothesWithClass.push(clothesObj);
      }
    });
    return clothesWithClass;
  }

  render() {
    const clothesWithClass = this.getClothesWithClass(this.props.clothes);
    const clothes = clothesWithClass.map(clothes => {
      return <ClothesTypeToTag clothes={clothes}
                               onRemove={this.props.onRemove}
                               onConfirm={this.props.onConfirm}/>;
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

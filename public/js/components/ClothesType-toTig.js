import React, {Component} from 'react';
const Link = require('react-router').Link;

class ClothesTypeToTig extends Component {
  remove(section) {
    this.props.onRemove(section.c_id);
  }

  addWrap() {
    $("input:checked").parent().siblings(".img-wrap").css("display", "inline");
    $("input:not(:checked)").parent().siblings(".img-wrap").css("display", "none");
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

  render() {
    const sectionClothes = this.props.clothes.allSections.map((section, index) => {
      const imgUrl = `../../images/image${section.image}.jpg`;
      return (
        <div className="imgSize" key={index}>
          <div className="img-wrap"></div>
          <img className="imgage" src={imgUrl}
               onMouseOver={this.mouseOver}
               onMouseOut={this.mouseOut}/>
          <div className="delete-wrap">
            <span className="glyphicon glyphicon-trash delete"
                  onClick={this.remove.bind(this, section)}>
            </span>
          </div>
          <div className="select">
            <input type="radio" name={section.sort} className="input-select" id="select"
                   value={section.c_id}
                   onClick={this.addWrap}/>
          </div>
        </div>
      )
    });
    return (
      <div>
        <span className="title-inline text-success">{this.props.clothes.sort}</span>
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
}

export default ClothesTypeToTig;
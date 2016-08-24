
import React, {Component} from "react";
const getAllMatches = require('./getAllMatches');


class MatchList extends Component{

  componentDidMount(){
    const userName = 'xiaopangzhu';
    this.props.onMatch(userName);
  }

  getStyle(clothes, index) {
    const up = `../../images/${clothes.up.imgUp}.jpg`;
    const down = `../../images/${clothes.down.imgDown}.jpg`;

    return <div className="totalTop" key={index}>
      <form key={index} className="col-sm-6 col-md-3 ">
        <div ><img className="img-thumbnail photoTop" src={up}
                   alt="通用的占位符缩略图"/>
        </div>
        <div ><img className="img-thumbnail photoBottom" src={down}
                   alt="通用的占位符缩略图"/>
        </div>
      </form>
    </div>
  }

  render() {
    let allMatches;
    if (getAllMatches(this.props.user).length === 0) {
      allMatches = <p className="font-center">还没有匹配衣服</p>;
    } else {
      allMatches = getAllMatches(this.props.user).map((cloth, index)=> {
        return this.getStyle(cloth, index);
      });
    }
    return <div className="container  top  wrap-colthes matchesbackground">
      {allMatches}
    </div>
  }
}

export default MatchList;
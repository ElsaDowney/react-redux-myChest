import React, {Component} from "react";

class Match extends Component {

  render() {
    const up = `../../images/image${this.props.match.up.imgUp}.jpg`;
    const down = `../../images/image${this.props.match.down.imgDown}.jpg`;

    return <div className="totalTop" key={this.props.index}>
      <form key={this.props.index} className="col-sm-6 col-md-3 ">
        <div ><img className="img-thumbnail photoTop" src={up}
                   alt="通用的占位符缩略图"/>
        </div>
        <div ><img className="img-thumbnail photoBottom" src={down}
                   alt="通用的占位符缩略图"/>
        </div>
      </form>
    </div>
  }
}

class MatchList extends Component {

  componentDidMount() {
    const userName = 'xiaopangzhu';
    this.props.onMatch(userName);
  }


  render() {
    let allMatches;

    if (this.props.matches.length === 0) {
      allMatches = <p className="font-center">还没有匹配衣服</p>;
    } else {
      allMatches = this.props.matches.map((match, index)=> {
        return <Match match={match} index={index}/>;
      });
    }
    return <div className="container  top  wrap-colthes matchesbackground">
      {allMatches}
    </div>
  }
}

export default MatchList;
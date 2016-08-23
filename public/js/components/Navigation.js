import React, {Component} from "react";
var Link = require('react-router').Link;
const Nav = React.createClass({

  render() {
    return (
      <div className="navbar-wrapper ">
        <div className="container">
          <nav className="navbar navbar-inverse navbar-static-top ">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">衣搭搭</a>
              </div>
              <div classID="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                  <li className="active"><Link to='/'>首页</Link></li>
                  <li><Link to='ClothList'>我的衣柜</Link></li>
                  <li><Link to='#'>添加美衣</Link></li>
                  <li><Link to='LoginAndRegister'>我的搭配</Link></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to='RegisterAndLogin'>登陆/注册</Link></li>
                </ul>
              </div>
            </div>
          </nav>

        </div>
      </div>
    )
  }
});
module.exports = Nav;

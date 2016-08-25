import React from 'react'
import {Component} from 'react'
import Login from '../containers/Login'
import Register from '../containers/Register'

class RegisterAndLogin extends Component {
  change(value) {
    this.props.onToggle(value);
  }

  render() {

    return (
      <div id="register-login-center" className="login-register">
        <div className="panel-heading">
          <div className="row">
            <div className="col-md-6 ">
              <a onClick={this.change.bind(this, 'Login')}>登录</a>
            </div>
            <div className="col-md-6  ">
              <a onClick={this.change.bind(this, 'Register')}>注册</a>
            </div>
          </div>
          <hr/>
          <div className={this.props.toggle === 'Login' ? '' : 'hidden'}>
            <Login/>
          </div>
          <div className={this.props.toggle === 'Login' ? 'hidden' : ''}>
            <Register/>
          </div>
        </div>
      </div>
    );
  }
}


export default RegisterAndLogin;
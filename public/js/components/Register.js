import React, {Component} from 'react'

class Register extends Component {
  commit() {
    const userName = this.refs.userName.value;
    const password = this.refs.password.value;
    const confirmPassword = this.refs.confirmPassword.value;
    if (userName.length >= 2 && (password.length >= 6 && password.length <= 12)) {
      if (password != confirmPassword) {
        alert("哎呀,两次密码不同啦,请重新输入吧");
      }
      else {
        this.props.onCommit(userName, password);
      }
    }
    else {
      alert("格式不正确,请重新注册!");
    }
  }

  judgeUserName() {
    const userName = this.refs.userName.value;
    if (userName.length < 2) {
      $("#p1").show();
    } else {
      $("#p1").hide();
    }
  }

  judgePassword() {
    const password = this.refs.password.value;
    if (password.length < 6 || password.length > 12) {
      $("#p2").show();
    } else {
      $("#p2").hide();
    }
  }

  render() {
    if (this.props.registerState === 'success') {
      alert('注册成功,请登陆');
      location.href = '/RegisterAndLogin'
    }
    if (this.props.registerState === 'fail') {
      alert('用户已存在');
    }

    return <div>
      <div className="user">
        <input type="text" className="form-control" ref="userName"
               onChange={this.judgeUserName.bind(this)}
               placeholder="请输入用户名"/>
        <p id="p1" className="registerRemark">亲,用户名长度应不小于2位!</p>
      </div>
      <br/>
      <div className="password form-group">
        <input type="password" className="form-control" ref="password"
               onClick={this.judgePassword.bind(this)}
               placeholder="请输入密码"/>
        <p id="p2" className="registerRemark">亲,密码应为6到12位!</p>
      </div>
      <br/>
      <div className="repeatPassword form-group">
        <input type="password" className="form-control" ref="confirmPassword"
               placeholder="请再次确认密码"/>
      </div>
      <hr/>
      <div className="buttonCenter">
        <button type="submit"
                onClick={this.commit.bind(this)}
                className="btn btn-default">注册
        </button>
      </div>
    </div>
  }
}

export default Register;



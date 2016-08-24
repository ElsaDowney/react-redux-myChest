import React, {Component} from 'react'

class Login extends Component {
onSubmit(){
  const name=this.refs.name.value;
  const password=this.refs.password.value;
  this.props.submit(name,password);

}

  render() {
    return <div>
      <div className="rows">
        <div className="col-md-3">账号：</div>
        <input type="text" ref="name" className="col-md-9 "
               placeholder="请输入用户名"/>
      </div>
      <br/>
      <div className="rows">
        <div className="col-md-3">密码：</div>
        <input type="password" className="col-md-9" ref="password"
                placeholder="请输入密码"/>
      </div>
      <button　onClick={this.onSubmit.bind(this)}>登录</button>
    </div>
  }
}


export default Login;
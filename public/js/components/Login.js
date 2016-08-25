import React, {Component} from 'react'

class Login extends Component {
onSubmit(){
  const name=this.refs.name.value;
  const password=this.refs.password.value;
  this.props.submit(name,password);
}
  render() {
    if(this.props.isLogin==='success'){
      alert('登录成功');
    }
    else if(this.props.isLogin==='fail'){
      alert('你输入的密码和账户名不匹配');
    }
    return <div>
      <div className="usersName">
        <input type="text" ref="name" className="form-control "
               placeholder="请输入用户名"/>
      </div>
      <br/>
      <div className="password">
        <input type="password" className="form-control" ref="password"
                placeholder="请输入密码"/>
      </div>
      <hr />
      <div className="buttonCenter">
      <button　className="btn btn-default" onClick={this.onSubmit.bind(this)}>登录</button>
        </div>
    </div>
  }
}


export default Login;
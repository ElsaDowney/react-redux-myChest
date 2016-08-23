import reducer from '../../public/js/reducers/Login-reducer';
const expect = require('chai').expect;

describe('Login-reducer', function () {

  it('success Login', function () {
    const state = { isLogin: false};
    const action = { type:'LOGIN',logined:true};
    expect(reducer(state, action)).to.be.deep.equal({isLogin:true});
  });

  it('false Login', function () {
    const state = { isLogin: false};
    const action = { type:'LOGIN',logined:false};
    expect(reducer(state, action)).to.be.deep.equal({isLogin:false});
  });

});

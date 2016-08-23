import reducer from '../../public/js/reducers/Login-reducer';
const expect = require('chai').expect;

describe('Login-reducer', function () {

  it('changes isLogin success', function () {
    const state = { isLogin: false};
    const action = { type:'LOGIN',logined:true};
    expect(reducer(state, action)).to.be.deep.equal({isLogin:true});
  });

  it('changes isLogin false', function () {
    const state = { isLogin: false};
    const action = { type:'LOGIN',logined:false};
    expect(reducer(state, action)).to.be.deep.equal({isLogin:false});
  });

});

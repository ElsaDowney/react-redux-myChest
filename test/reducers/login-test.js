import reducer from '../../public/js/reducers/login';
const expect = require('chai').expect;

describe('Login-reducer', function () {

  it('changes isLogin success', function () {
    const state = { isLogin: ''};
    const action = { type:'LOGIN',value:'success'};
    expect(reducer(state, action)).to.be.deep.equal({isLogin:'success'});
  });

  it('changes isLogin false', function () {
    const state = { isLogin: ''};
    const action = { type:'LOGIN',value:'fail'};
    expect(reducer(state, action)).to.be.deep.equal({isLogin:'fail'});
  });

});

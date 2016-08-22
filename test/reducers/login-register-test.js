const reducer = require('../../public/js/reducers/RegisterAndLogin-reducer');
const expect = require('chai').expect;

describe('RegisterAndLogin-reducer', function () {
  it('toggle to Login', function () {
    const state = {toggle: 'Login'};
    const action = {type: "Toggle", value: 'Login'};
    expect(reducer(state, action)).to.be.deep.equal({toggle: 'Login'});
  });

  it('toggle to Register', function () {
    const state = {toggle: 'Login'};
    const action = {type: "Toggle", value: 'Register'};
    expect(reducer(state, action)).to.be.deep.equal({toggle: 'Register'});
  });

});

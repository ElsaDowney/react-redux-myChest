const reducer = require('../../public/js/reducers/register-login');
const expect = require('chai').expect;

describe('RegisterAndLogin reducer', function () {

  it('toggles to Login', function () {
    const state = {toggle: 'Login'};
    const action = {type: "TOGGLE", value: 'Login'};
    expect(reducer(state, action)).to.be.deep.equal({toggle: 'Login'});
  });

  it('toggles to Register', function () {
    const state = {toggle: 'Login'};
    const action = {type: "TOGGLE", value: 'Register'};
    expect(reducer(state, action)).to.be.deep.equal({toggle: 'Register'});
  });

});

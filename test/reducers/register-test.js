const reducer = require('../../public/js/reducers/register-reducer');
const expect = require('chai').expect;

describe('Register', function () {

  it('success to register', function () {
    const state ={registerState:''};
    const action = {type: "RegisterCommit",value:'success'};
    expect(reducer(state, action)).to.be.deep.equal({registerState: 'success'});
  });

  it('user has exist', function () {
    const state ={registerState:''};
    const action = {type: "RegisterCommit",value:'fail'};
    expect(reducer(state, action)).to.be.deep.equal({registerState: 'fail'});
  });

});

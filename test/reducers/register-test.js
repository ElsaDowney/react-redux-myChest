const reducer = require('../../public/js/reducers/register');
 const expect = require('chai').expect;

describe('Register', function () {

  it('changes registerState success', function () {
    const state = {registerState: ''};
    const action = {type: "REGISTER_COMMIT", value: 'success'};

    expect(reducer(state, action)).to.be.deep.equal({registerState: 'success'});

  });

  it('changes registerState fail', function () {
    const state = {registerState:''};
    const action = {type: "REGISTER_COMMIT", value:'fail'};

    expect(reducer(state, action)).to.be.deep.equal({registerState:'fail'});
  });

});

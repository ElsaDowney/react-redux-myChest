const reducer = require('../../public/js/reducers/register');
const expect = require('chai').expect;

describe('Register', ()=> {

  it('changes registerState success', ()=> {
    const state = {registerState: ''};
    const action = {type: "REGISTER_COMMIT", value: 'success'};

    expect(reducer(state, action)).to.be.deep.equal({registerState: 'success'});
  });

  it('changes registerState fail', ()=> {
    const state = {registerState: ''};
    const action = {type: "REGISTER_COMMIT", value: 'fail'};

    expect(reducer(state, action)).to.be.deep.equal({registerState: 'fail'});
  });

});

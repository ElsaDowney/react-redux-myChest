const matches = require('../../public/js/components/getAllMatches');
const expect = require('chai').expect;

describe('reducer', function () {

  it('get', function () {
    const allMatches = [
      {c_id: 0, season: "summer", color: "red", sort: "coat", style: "fashion", image: "0", matches: [3, 4]},
      {c_id: 1, season: "summer", color: "yellow", sort: "coat", style: "fashion", image: "1", matches: []},
      {c_id: 2, season: "summer", color: "blue", sort: "coat", style: "simple", image: "2", matches: []},
      {c_id: 3, season: "summer", color: "white", sort: "pants", style: "simple", image: "3", matches: [1]},
      {c_id: 4, season: "summer", color: "white", sort: "pants", style: "simple", image: "4", matches: [1]},
      {c_id: 5, season: "summer", color: "white", sort: "pants", style: "simple", image: "5", matches: []},
      {c_id: 6, season: "summer", color: "white", sort: "pants", style: "simple", image: "6", matches: []},
      {c_id: 7, season: "summer", color: "white", sort: "pants", style: "simple", image: "7", matches: []},
      {c_id: 8, season: "summer", color: "white", sort: "pants", style: "simple", image: "8", matches: []},
    ];
    const matchList = matches(allMatches);
    const expectList = [
      {
        up: {id: 0, imgUp: "0"},
        down: {id: 3, imgDown: "3"}
      },
      {
        up: {id: 0, imgUp: "0"},
        down: {id: 4, imgDown: "4"}
      }
    ];
    expect(matchList).to.be.deep.equal(expectList);
  });
});

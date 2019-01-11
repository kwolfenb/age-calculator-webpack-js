import { Age } from '../src/age.js';
describe('Age', function() {
  var reusableAge;

  beforeEach(function() {
    reusableAge = new Age(1,15,1990);
  });

  it('should return correct day', function() {
    let result = reusableAge.day;
    console.log(result);
    expect(reusableAge.day).toEqual(15);
  });

});
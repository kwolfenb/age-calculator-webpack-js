import { Age } from '../src/age.js';
describe('Age', function() {
  var reusableAge;

  beforeEach(function() {
    reusableAge = new Age(1,15,1990);
  });

  it('should return correct day', function() {
    let result = reusableAge.day;
    expect(result).toEqual(15);
  });

  it('should return correct month and year', function() {
    let resultMonth = reusableAge.month;
    let resultYear = reusableAge.year;
    expect(resultMonth).toEqual(1);
    expect(resultYear).toEqual(1990);
  });

  it('should return todays date', function() {
    let todaysDate = new Date();
    let today = reusableAge.todaysDate();
    console.log(today.getDate());
    console.log(todaysDate.getDate());
    expect(today.getDate()).toEqual(todaysDate.getDate());
  });


});
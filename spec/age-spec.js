import { Age } from '../src/age.js';
describe('Age', function() {
  var reusableAge;

  beforeEach(function() {
    reusableAge = new Age(21);
  });

  it('should return inputted age', function() {
    //age from reusableAge is 21
    expect(reusableAge.earthAge).toEqual(21);
  });

  



  // it('should return correct day', function() {
  //   let result = reusableAge.day;
  //   expect(result).toEqual(15);
  // });

  // it('should return correct month and year', function() {
  //   let resultMonth = reusableAge.month;
  //   let resultYear = reusableAge.year;
  //   expect(resultMonth).toEqual(1);
  //   expect(resultYear).toEqual(1990);
  // });

  it('should return todays date', function() {
    let todaysDate = new Date();
    let today = reusableAge.todaysDate();
    expect(today.getDate()).toEqual(todaysDate.getDate());
  });


});
import { Age } from '../src/age.js';
describe('Age', function() {
  var reusableAge;

  beforeEach(function() {
    //age from reusableAge is 21    
    reusableAge = new Age(21);
  });

  it('should return inputted age in Earth years', function() {
    expect(reusableAge.earthAge).toEqual(21);
  });

  it('should return age in Mercury years', function() {
    const mercuryYear = .24;
    let mercuryAge = reusableAge.mercuryAge();
    let result = 21/mercuryYear;
    expect(mercuryAge).toEqual(result);
  });

  it('should return age in Venus years', function() {
    const venusYear = .62;
    let venusAge = reusableAge.venusAge();
    let result = 21/venusYear;
    expect(venusAge).toEqual(result);
  });

  it('should return age in Mars years', function() {
    const marsYear = 1.88;
    let marsAge = reusableAge.marsAge();
    let result = 21/marsYear;
    expect(marsAge).toEqual(result);
  });

  it('should return age in Jupiter years', function() {
    const jupiterYear = 11.86;
    let jupiterAge = reusableAge.jupiterAge();
    let result = 21/jupiterYear;
    expect(jupiterAge).toEqual(result);
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
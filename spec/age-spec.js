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
    let earthAge = reusableAge.earthAge;
    let mercuryAge = reusableAge.mercuryAge(earthAge);
    let result = 21/mercuryYear;
    expect(mercuryAge).toEqual(result);
  });

  it('should return age in Venus years', function() {
    const venusYear = .62;
    let earthAge = reusableAge.earthAge;
    let venusAge = reusableAge.venusAge(earthAge);
    let result = 21/venusYear;
    expect(venusAge).toEqual(result);
  });

  it('should return age in Mars years', function() {
    const marsYear = 1.88;
    let earthAge = reusableAge.earthAge;
    let marsAge = reusableAge.marsAge(earthAge);
    let result = 21/marsYear;
    expect(marsAge).toEqual(result);
  });

  it('should return age in Jupiter years', function() {
    const jupiterYear = 11.86;
    let earthAge = reusableAge.earthAge;
    let jupiterAge = reusableAge.jupiterAge(earthAge);
    let result = 21/jupiterYear;
    expect(jupiterAge).toEqual(result);
  });

  it('should return age in Pluto years', function() {
    const plutoYear = 248.59;
    let earthAge = reusableAge.earthAge;
    let plutoAge = reusableAge.plutoAge(earthAge);
    let result = 21/plutoYear;
    expect(plutoAge).toEqual(result);
  });

  it('should set life expectancy', function() {
    let expYears = 78;
    reusableAge.setEarthYearsExp(expYears);
    let result = reusableAge.earthYearsExp;
    expect(expYears).toEqual(result);
  });

  it('should calculate remaining years expected in Earth years', function() {
    let expYears = 78;
    let earthAge = reusableAge.earthAge; // current age 21
    reusableAge.setEarthYearsExp(expYears);
    let remainingYearExp = expYears - earthAge;
    let result = reusableAge.remainingYears(); 
    expect(remainingYearExp).toEqual(result);
  });

  it('should calculate remaining years expected in Mercury years', function() {
    const mercuryYear = .24;
    let expYears = 78;
    reusableAge.setEarthYearsExp(expYears);
    let remainingEarthYears = reusableAge.remainingYears();
    let remainingMercuryYears = reusableAge.mercuryAge(remainingEarthYears); 
    let result = (expYears - reusableAge.earthAge)/mercuryYear;
    expect(remainingMercuryYears).toEqual(result);
  });

  it('should calculate remaining years expected in Venus years', function() {
    const venusYear = .62;
    let expYears = 78;
    reusableAge.setEarthYearsExp(expYears);
    let remainingEarthYears = reusableAge.remainingYears();
    let remainingVenusYears = reusableAge.venusAge(remainingEarthYears); 
    let result = (expYears - reusableAge.earthAge)/venusYear;
    expect(remainingVenusYears).toEqual(result);
  });

  it('should calculate remaining years expected in Mars years', function() {
    const marsYear = 1.88;
    let expYears = 78;
    reusableAge.setEarthYearsExp(expYears);
    let remainingEarthYears = reusableAge.remainingYears();
    let remainingMarsYears = reusableAge.marsAge(remainingEarthYears); 
    let result = (expYears - reusableAge.earthAge)/marsYear;
    expect(remainingMarsYears).toEqual(result);
  });

  it('should calculate remaining years expected in Jupiter years', function() {
    const jupiterYear = 11.86;
    let expYears = 78;
    reusableAge.setEarthYearsExp(expYears);
    let remainingEarthYears = reusableAge.remainingYears();
    let remainingJupiterYears = reusableAge.jupiterAge(remainingEarthYears); 
    let result = (expYears - reusableAge.earthAge)/jupiterYear;
    expect(remainingJupiterYears).toEqual(result);
  });

  it('should calculate remaining years expected in Pluto years', function() {
    const plutoYear = 248.59;
    let expYears = 78;
    reusableAge.setEarthYearsExp(expYears);
    let remainingEarthYears = reusableAge.remainingYears();
    let remainingPlutoYears = reusableAge.plutoAge(remainingEarthYears); 
    let result = (expYears - reusableAge.earthAge)/plutoYear;
    expect(remainingPlutoYears).toEqual(result);
  });

  it('should calculate years lived beyond life expectancy with negative remaining years', function() {
    let currentAge = 98;
    let newAge = new Age(currentAge); //98 year old person
    let expYears = 78; // 22 years beyond life expectancy
    newAge.setEarthYearsExp(expYears);
    let remainingEarthYears = newAge.remainingYears();
    let result = -20;
    expect(remainingEarthYears).toEqual(result);
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
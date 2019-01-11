import { Age } from '../src/age.js';
describe('Age', function() {
  var reusableAge;

  beforeEach(function() {
    //age from reusableAge is 21
    reusableAge = new Age(1998, 1, 1);
  });

  it('should return inputted birth day, month and year', function() {
    let year = 1998;
    let month = 0;
    let day = 1;
    expect(reusableAge.birthYear).toEqual(year);
    expect(reusableAge.birthMonth).toEqual(month);
    expect(reusableAge.birthDay).toEqual(day);
  });
  
  it('should calculate age in years based on input birth date', function () { 
    let reusableAgeYears = 21;
    reusableAge.calculateAge();
    let currentAge = Math.round(reusableAge.earthAge);
    expect(currentAge).toEqual(reusableAgeYears);
  });
  
  it('should return age in Mercury years', function() {
    const mercuryYear = .24;
    reusableAge.calculateAge();
    let earthAge = reusableAge.earthAge;
    let mercuryAge = reusableAge.mercuryAge(earthAge);
    let result = earthAge/mercuryYear;
    expect(mercuryAge).toEqual(result);
  });

  it('should return age in Venus years', function() {
    const venusYear = .62;
    reusableAge.calculateAge();
    let earthAge = reusableAge.earthAge;
    let venusAge = reusableAge.venusAge(earthAge);
    let result = earthAge/venusYear;
    expect(venusAge).toEqual(result);
  });

  it('should return age in Mars years', function() {
    const marsYear = 1.88;
    reusableAge.calculateAge();
    let earthAge = reusableAge.earthAge;
    let marsAge = reusableAge.marsAge(earthAge);
    let result = earthAge/marsYear;
    expect(marsAge).toEqual(result);
  });

  it('should return age in Jupiter years', function() {
    const jupiterYear = 11.86;
    reusableAge.calculateAge();
    let earthAge = reusableAge.earthAge;
    let jupiterAge = reusableAge.jupiterAge(earthAge);
    let result = earthAge/jupiterYear;
    expect(jupiterAge).toEqual(result);
  });

  it('should return age in Pluto years', function() {
    const plutoYear = 248.59;
    reusableAge.calculateAge();
    let earthAge = reusableAge.earthAge;
    let plutoAge = reusableAge.plutoAge(earthAge);
    let result = earthAge/plutoYear;
    expect(plutoAge).toEqual(result);
  });

  it('should set life expectancy', function() {
    let expYears = 78;
    reusableAge.setEarthYearsExp(expYears);
    let result = reusableAge.earthYearsExp;
    expect(expYears).toEqual(result);
  });

  it('should calculate remaining years expected in Earth years', function() {
    let expYears = 78;  // life expectancy 78 years
    reusableAge.calculateAge();
    let earthAge = reusableAge.earthAge; // current age 21
    reusableAge.setEarthYearsExp(expYears);
    let result = expYears - earthAge;
    let remainingYearExp = reusableAge.remainingYears(); 
    expect(remainingYearExp).toEqual(result);
  });

  it('should calculate remaining years expected in Mercury years', function() {
    const mercuryYear = .24;
    let expYears = 78;
    reusableAge.calculateAge();
    reusableAge.setEarthYearsExp(expYears);
    let remainingEarthYears = reusableAge.remainingYears();
    let remainingMercuryYears = reusableAge.mercuryAge(remainingEarthYears); 
    let result = (expYears - reusableAge.earthAge)/mercuryYear;
    expect(remainingMercuryYears).toEqual(result);
  });

  it('should calculate remaining years expected in Venus years', function() {
    const venusYear = .62;
    let expYears = 78;
    reusableAge.calculateAge();
    reusableAge.setEarthYearsExp(expYears);
    let remainingEarthYears = reusableAge.remainingYears();
    let remainingVenusYears = reusableAge.venusAge(remainingEarthYears); 
    let result = (expYears - reusableAge.earthAge)/venusYear;
    expect(remainingVenusYears).toEqual(result);
  });

  it('should calculate remaining years expected in Mars years', function() {
    const marsYear = 1.88;
    let expYears = 78;
    reusableAge.calculateAge();
    reusableAge.setEarthYearsExp(expYears);
    let remainingEarthYears = reusableAge.remainingYears();
    let remainingMarsYears = reusableAge.marsAge(remainingEarthYears); 
    let result = (expYears - reusableAge.earthAge)/marsYear;
    expect(remainingMarsYears).toEqual(result);
  });

  it('should calculate remaining years expected in Jupiter years', function() {
    const jupiterYear = 11.86;
    let expYears = 78;
    reusableAge.calculateAge();
    reusableAge.setEarthYearsExp(expYears);
    let remainingEarthYears = reusableAge.remainingYears();
    let remainingJupiterYears = reusableAge.jupiterAge(remainingEarthYears); 
    let result = (expYears - reusableAge.earthAge)/jupiterYear;
    expect(remainingJupiterYears).toEqual(result);
  });

  it('should calculate remaining years expected in Pluto years', function() {
    const plutoYear = 248.59;
    let expYears = 78;
    reusableAge.calculateAge();
    reusableAge.setEarthYearsExp(expYears);
    let remainingEarthYears = reusableAge.remainingYears();
    let remainingPlutoYears = reusableAge.plutoAge(remainingEarthYears); 
    let result = (expYears - reusableAge.earthAge)/plutoYear;
    expect(remainingPlutoYears).toEqual(result);
  });

  it('should calculate years lived beyond life expectancy with negative remaining years', function() {
    let newAge = new Age(1900, 0, 1); //119 year old person
    reusableAge.calculateAge();
    let expYears = 78; // 41 years past expected
    newAge.setEarthYearsExp(expYears);
    let remainingEarthYears = newAge.remainingYears();
    let result = expYears - newAge.earthAge;
    expect(remainingEarthYears).toEqual(result);
  });

  it('should calculate number of Mayfly lifetimes user has lived', function() {
    reusableAge.calculateAge();
    let minutesInYear = (60*24*365);
    let years = reusableAge.earthAge;
    let mayflyLifetimes = reusableAge.mayfly(years);
    let result = years*minutesInYear/5;
    expect(mayflyLifetimes).toEqual(result);
  });

});
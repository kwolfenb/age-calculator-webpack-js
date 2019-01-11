export class Age{

  constructor(age) {
    this.earthAge = age;
    this.earthYearsExp;
  }

  mercuryAge(years) {
    const mercuryYear = .24;
    let mercuryYears = (years / mercuryYear);
    return mercuryYears; 
  }

  venusAge(years) {
    const venusYear = .62;
    let venusYears = (years / venusYear);
    return venusYears; 
  }

  marsAge(years) {
    const marsYear = 1.88;
    let marsYears = (years / marsYear);
    return marsYears; 
  }

  jupiterAge(years) {
    const jupiterYear = 11.86;
    let jupiterYears = (years / jupiterYear);
    return jupiterYears; 
  }

  plutoAge(years) {
    const plutoYear = 248.59;
    let plutoYears = (years / plutoYear);
    return plutoYears; 
  }

  setEarthYearsExp(expYears) {
    this.earthYearsExp = expYears;
  }

  remainingYears() {
    let remainingYears = this.earthYearsExp - this.earthAge;
    return remainingYears;
  }

  dateOfBirth(month, day, year) {
    let dob = new Date(year, month, day);
    return dob;
  }

  todaysDate() {
    let d = new Date();
    return d;
  }


}



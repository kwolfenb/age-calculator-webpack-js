export class Age{

  constructor(birthYear, birthMonth, birthDay) {
    this.birthYear = birthYear;
    this.birthMonth = birthMonth-1;
    this.birthDay = birthDay;
    this.earthAge;
    this.earthYearsExp;
  }

  calculateAge() {
    let dob = new Date(this.birthYear, this.birthMonth, this.birthDay);
    let today = new Date();
    const oneDay = (1000 * 60 * 60 * 24);
    let dobTime = dob.getTime();
    let todayTime = today.getTime();
    let ageTime = todayTime - dobTime;
    let ageDays = (Math.round(ageTime/ oneDay));
    let ageYears = (ageDays/365).toFixed(1);
    this.earthAge = ageYears;
  }

  setEarthYearsExp(expYears) {
    this.earthYearsExp = expYears;
  }

  remainingYears() {
    let remainingYears = this.earthYearsExp - this.earthAge;
    return remainingYears;
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
}



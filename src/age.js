export class Age{

  constructor(age) {
    this.earthAge = age;
  }

  mercuryAge() {
    const mercuryYear = .24;
    let mercuryYears = (this.earthAge / mercuryYear);
    return mercuryYears; 
  }

  venusAge() {
    const venusYear = .62;
    let venusYears = (this.earthAge / venusYear);
    return venusYears; 
  }

  marsAge() {
    const marsYear = 1.88;
    let marsYears = (this.earthAge / marsYear);
    return marsYears; 
  }

  jupiterAge() {
    const jupiterYear = 11.86;
    let jupiterYears = (this.earthAge / jupiterYear);
    return jupiterYears; 
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



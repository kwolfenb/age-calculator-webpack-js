export class Age{

  constructor(age) {
    this.earthAge = age;
  }

  mercuryAge() {
    const mercuryYear = .24;
    let mercuryYears = (this.earthAge * mercuryYear);
    return mercuryYears; 
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



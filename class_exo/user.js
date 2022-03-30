export class User {
    constructor(firstName, lastName, job = 'bien_joué_chacal') {
    this.job = job;
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  setfirstName(firstName) {
    this.firstName = `${firstName}`;
  }
  getfirstName() {
    return this.firstName;
  }


  setlastName(lastName) {
    this.lastName = `${lastName}`;
  }
  getlastName() {
    return this.lastName;
  }


  setjob(job) {
    this.job = `${job}`;
  }
  getjob() {
    return this.job;
  }


  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

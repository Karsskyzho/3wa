import {Age} from './age.js';

export class User {
  constructor(firstName, lastName, job = null, age) {
    this.job = job;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age.getAge;
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
    return `${this.firstName} ${this.lastName}`;
  }

  setAge(age) {
    this.age = `${age}`;
  }
  getAge() {
    return `${this.age}`;
  }
}

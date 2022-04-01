export class Age {

  constructor(age) {
      this.age = age;
  }
  setAge(age) {
    if (age > 0 && age < 100) {
      this.age = age;
    } else {
        this.age = null;
    };
  }
}

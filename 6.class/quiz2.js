class Employee {
  constructor(name, department, hoursPerMonth, payRate) {
    this.name = name;
    this.department = department;
    this.hoursPerMonth = hoursPerMonth;
    this.payRate = payRate;
  }
  calculatePay() {
    return this.hoursPerMonth * this.payRate;
  }
}

class FulltimeEmployee extends Employee {
  static PAY_RATE = 10000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, FulltimeEmployee.PAY_RATE);
  }
}

class ParttimeEmployee extends Employee {
  static PAY_RATE = 8000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, ParttimeEmployee.PAY_RATE);
  }
}

const ellie = new FulltimeEmployee("엘리", "s/w", 30);
const bob = new ParttimeEmployee("밥", "s/w", 20);
console.log(ellie.calculatePay());
console.log(bob.calculaltePay());

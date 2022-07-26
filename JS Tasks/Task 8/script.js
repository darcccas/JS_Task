/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(a, b) {
  this.a = a;
  this.b = b;
  this.getSum = () => this.a + this.b;
  this.getSubtraction = () => this.a - this.b;
  this.getMultiplication = () => this.a * this.b;
  this.getDivision = () => this.a / this.b;
}

const calculator = new Calculator(55, 35);
console.log(calculator);
console.log(calculator.getSum());
console.log(calculator.getSubtraction());
console.log(calculator.getMultiplication());
console.log(calculator.getDivision());

//------------ES6-----------Class------------------------

class CalculatorES6 {
  constructor(c, d) {
    this.c = c;
    this.d = d;
  }
  getSum = () => this.c + this.d;
  getSubtraction = () => this.c - this.d;
  getMultiplication = () => this.c * this.d;
  getDivision = () => this.c / this.d;
}

const calcByClass = new CalculatorES6(55, 35);

console.log(calcByClass);
console.log(calcByClass.getSum());
console.log(calcByClass.getSubtraction());
console.log(calcByClass.getMultiplication());
console.log(calcByClass.getDivision());

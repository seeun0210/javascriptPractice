//삼항조건연산자 Ternary Operator
//조건식?참인 경우: 거짓인 경우
/*let fruit = "orange";
if (fruit === "apple") {
  console.log("사과");
} else if (fruit === "orange") {
  console.log("orange");
} else {
  console.log("!!");
}*/
let fruit = "orange";
fruit === "apple" ? console.log("apple") : console.log("!!");

let emoji = fruit === "apple" ? "apple" : "!!";
console.log(emoji);

//사용예제1
function sum(a, b) {
  console.log("function");
  return a + b;
}
const result = sum(1, 2);
console.log(result);

//사용 예제2

function fullName(firstName, lastName) {
  return `${firstName} ${lastName}😊 `; //여기에서 주의!! 싱글따옴표(')가 아니라 백틱(`)을 사용해야함!!
}
let lastName = "김";
let firstName = "지수";
console.log(fullName(firstName, lastName));
let lastName2 = "박";
let firstName2 = "철수";
console.log(fullName(firstName2, lastName2));

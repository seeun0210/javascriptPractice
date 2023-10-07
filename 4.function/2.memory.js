function add(a, b) {
  console.log(a);
  console.log(b);
  return a + b;
}
const sum = add; //함수이름 자체는 함수를 가리키는 이름과 동일하다. 함수이름 자체는 함수를 가리키는 것이다.

sum(1, 2);
console.log(sum(1, 2));
console.log(add(1, 2));

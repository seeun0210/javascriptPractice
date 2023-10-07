//동등비교관계 연산자(Equality operators)
//==값이 같음
//!=값이 다름
//===값과 타입이 둘다 같음
//!==값과 타입이 다름
console.log(2 == 2);
console.log(2 != 2);
console.log(2 != 3);
console.log(2 == 3);
console.log(2 == "2");
console.log(2 === "2"); //타입비교관계연산자를 사용하는 것이 좋다
console.log(true == 1);
console.log(true === 1);
console.log(false == 0);
console.log(false === 0);
console.clear();

const obj1 = {
  name: "js",
};
const obj2 = {
  name: "js",
};

console.log(obj1 == obj2); //false가 나옴(obj1과 obj2가 서로다른 메모리 주소를 갖기 때문)
console.log(obj1 === obj2);
console.log(obj1.name == obj2.name);
console.log(obj1.name === obj2.name);

let obj3 = obj2;
console.log(obj3 == obj2);
console.log(obj3 === obj2);

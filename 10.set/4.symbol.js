//Symbol 심벌
//유일한 키를 생성할 수 있음
const map = new Map();
//const key1 = "key";
//const key2 = "key"; //원시 타입이기 때문에 값이 똑같아서 동잏한 카라고 간주함
//map.set(key1, "Hello");
//console.log(map.get(key2)); //그래서 key1에 value가 'Hello'이지만 key2도 key1과 동일한 키로 간주되어서 'Hello"가 찍힘
//console.log(key1 === key2); //true

const key1 = Symbol("key");
const key2 = Symbol("key");
map.set(key1, "hello"); //심벌을 만들게되면 서로 다른 키값을 가짐
console.log(map.get(key2)); //undefined
console.log(key1 === key2); //false

//동일한 이름으로 하나의 키를 사용하고 싶다면, Symbol.for
//전역 심벌 레지스트리(Global Symbol Registry)
const k1 = Symbol.for("key");
const k2 = Symbol.for("key");
console.log(k1 === k2); //true

console.log(Symbol.keyFor(k1));
console.log(Symbol.keyFor(key1)); //key1은 레지스트리에 만든 것 이 아니라 새로은 심벌을 매번 만들어 준 것

//심벌은 언제 사용? map에서

const obj = { [k1]: "Hello", [Symbol("key")]: 1 };
console.log(obj); //{ [Symbol(key)]: 'Hello', [Symbol(key)]: 1 }
console.log(obj[k1]); //Hello
console.log(obj[Symbol("key")]); //undefined

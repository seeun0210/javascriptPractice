//논리연산자 logical operator
//$$그리고
//||또는
//!부정(단항연산자에서 온것)
//!!불리언값으로 변환(단항연산자 응용버전)
let num = 8;
if (!(num >= 0 || num > 20)) {
  console.log("👍");
}

if (num != 9) {
  console.log("😊");
}

console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

console.log(true || true); //ture
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

console.log(!"text"); //문자열은 true-> false가 출력됨
console.log(!!"text"); //문자열을 boolean값으로 변환-> true가 출력됨

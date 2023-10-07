//함수 선언문 function name(){}
//함수 표현식 const name =function(){}

let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2));
//화살표 함수 const name=()=>{}
const sum = (a, b) => a + b;
console.log(sum(1, 2));

//생성자 함수 const object=new Function();//뒤 객체편에서 다룸

//IIFE(Immedicately-Invoked Fucntion Expressions)
(function run() {
  console.log("😊");
})();

// 논리 연산자 Logical Operator
// && 그리고
// || 또는
// 단축평가:short-circuit evaluation

const obj1 = { name: "김세은" };
const obj2 = { name: "후추", owner: "seeun" };

if (obj1 && obj2) {
  console.log("둘다 true!");
}
if (obj1 || obj2) {
  console.log("둘 중 하나 true!");
}

//단축 평가
let result = obj1 && obj2;
console.log(result); //obj2가 콘솔창에 찍힘
//조건문 밖에서 쓰면 obj1은 true니까 두번째에 오는 obj2는 result에 들어감
result = obj1 || obj2;
console.log(result); //obj1이 콘솔창에 찍힘
//obj1이 true니까 뒤에껀 확인 안해도 됨-> 그래서 obj1이 찍힘

//////////
// 활용 예
// && 조건이 truthy일 때 && 무언가를 해야 할 경우
// || 조건이 falsy일 때 || 무언가를 해야 할 경우
function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error("주인이 없어");
  }
  animal.owner = "바뀐 주인!";
}
function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error("주인이 있어");
  }
  animal.owner = "새로운 주인!";
}
obj1.owner && changeOwner(obj1); //주인이 없으니까(falsy) 뒤에껀 실행이 되지 않음
obj2.owner && changeOwner(obj2); //주인이 있으니까(truthy) 뒤에꺼 실행됨
console.log(obj1); //{ name: '김세은' }
console.log(obj2); //{ name: '후추', owner: '바뀐 주인!' }

obj1.owner || makeNewOwner(obj1); //owner가 없으니까(falsy) 뒤에꺼 실행됨
obj2.owner || makeNewOwner(obj2); //owner가 있으니까(truthy) 아까전에 changeOwner(obj2)한게 저장되서 그대로 나옴(뒤에꺼 실행 안됨)
console.log(obj1); //{ name: '김세은', owner: '새로운 주인!' }
console.log(obj2); //{ name: '후추', owner: '바뀐 주인!' }

// null 또는 undefined인 경우를 확인할 때
let item; //= { price: 1 };
const price = item && item.price; //item이 falsy이므로 item의 값 undefined가 그대로 할당되어서
console.log(price); //undefined

//기본값을 설정
//default parameter 전달하지 않거나, undefined 설정
//||값이 falsy한 경우 설정(할당): 0, -0, null, undefined, ''
function print(message) {
  const text = message || "Hello";
  console.log(text);
}
print();
print(undefined);
print(null);
print(0);
// 모두 Hello가 찍힘

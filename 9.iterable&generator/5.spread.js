//Spread 연산자, 전개구문
//모든 Iterable은 Spread 될 수 있다
//순회가 가능한 모든 것들은 촤르르륵 펼쳐질 수 있다
//func(...iterable)
//[...iterable]
//{...obj}
//EcmaScript 2018
function add(a, b, c) {
  return a + b + c;
}
const nums = [1, 2, 3];
add(nums[0], nums[1], nums[2]);
console.log(add(...nums));
///...nums는 num[0],num[1],num[2]와 같은 역할을 한다.

//Rest parameters
function sum(first, second, ...nums) {
  console.log(nums);
}
sum(1, 2, 0, 1, 2, 3, 4);

//Array Concat
const fruits1 = ["🍎", "🥝"];
const fruits2 = ["🍓", "🍌"];
let arr = fruits1.concat(fruits2);
console.log(arr);
arr = [...fruits1, ...fruits2]; //fruits1 배열읠 원소들과 fruist2 배열의 원소들을 촤르륵 펼칠 수 있음
console.log(arr);

//Object에서의 spread(...)의 사용
const ellie = { name: "Ellie", age: 20, home: { address: "seoul" } };
const updated = {
  ...ellie, //기존의 ellie뒤에
  job: "s/w engineer", //job을 추가할 수 있음
};
updated.home.address = "sinnaedong";
console.log(ellie);
console.log(updated);
console.log(ellie.home);
console.log(updated.home);
//home은 객체의 주소를 가리키고 있으므로 복사해온 새로운 객체에서도 동일한 객체의 주소를 가리키고 있기 때문에 모든 객체에서 변경된 내용이 반영된다(call by reference)

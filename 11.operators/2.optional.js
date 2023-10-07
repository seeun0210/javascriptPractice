// 옵셔널 체이닝 연산자 Optional Chaining Operator
// ES11 (ECMAScript 2020)
// ?
// null 또는 undefined 확인할 떄
let item = { price: 1 };
const price = item?.price; //아이템이 있으면 price에 접근,없으면 접근하지 마
console.log(price);

let obj = { name: "후추", owner: { name: "세은" } };
function printName(obj) {
  const ownerName = obj?.owner?.name;
  console.log(ownerName);
}
printName(obj);

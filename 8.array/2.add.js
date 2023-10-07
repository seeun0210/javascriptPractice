const fruits = ["🍌", "🍎", "🍇", "🍑"];

//배열 아이템을 참조하는 방법
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//const fruits = ["🍌", "🍎", "🍇", "🍑"];
//추가, 삭제-좋지 않은 방식❌❌❌❌
fruits[4] = "🍓"; //배열의 마지막에 추가 하고 싶다면 fruits[fruits.length]='🍓'의  방식으로 추가하는 것이 좋음
//인덱스를 이용해서 추가하는 것은 좋은 방식이 아님!
console.log(fruits);

delete fruits[1]; //삭제해도 그 공간에 비어있는 공간이 낭아있게 됨
console.log(fruits);

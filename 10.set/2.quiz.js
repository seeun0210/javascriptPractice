//1. 주어진 배열에서 중복 제거하기
const fruits = ["바나나", "사과", "포도", "바나나", "사과", "복숭아"];
const newFruits = new Set([]);
fruits.forEach((fruit) => newFruits.add(fruit));
// Set(4) { '바나나', '사과', '포도', '복숭아' }
console.log(newFruits);
//이걸 다시 배열로 만드려면?스프레드 연산자를 사용
console.log([...newFruits]);
// [ '바나나', '사과', '포도', '복숭아' ]

//함수로 만들고 싶다면?
function removeDuplication(array) {
  return [...new Set(array)];
}
console.log(removeDuplication(fruits));
// [ '바나나', '사과', '포도', '복숭아' ]

////////////////////
//2. 주어진 두 세트의 공통된 아이템만 담고 있는 세트를 만들어라
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);
const set3 = new Set([]);
set1.forEach((item) => {
  if (set2.has(item)) {
    set3.add(item);
  }
});
console.log(set3);
//Set(3) { 1, 2, 3 }

//함수를 만들어보자
function findIntersection(set1, set2) {
  const set = [...set1].filter((item) => set2.has(item));
  return new Set(set);
}
console.log(findIntersection(set1, set2));
// Set(3) { 1, 2, 3 }

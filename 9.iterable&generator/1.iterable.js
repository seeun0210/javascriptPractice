//Iterable 하다는 건! 순회가 가능하다는 것!
//[Symbol.iterator]():Iterator;
//심볼 정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는 것은
//순회가 가능한 객체이다 라는 것을 알 수 있음
//순회가 가능하면 무었을 할 수 있나? for...of, spread
const array = [1, 2, 3];
for (const item of array) {
  console.log(item);
}
const obj = { 0: 1, 1: 2 };
for (const item in obj) {
  //for in은 object안의 key를 출력
  console.log(item);
}

/*let iterator = array.values();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().done); //반복이 끝났음을 알 수 있음*/

const iterator = array.values();
while (true) {
  const item = iterator.next();
  if (item.done) break;
  console.log(item.value);
} //위에꺼랑 똑같은데 와일문 사용

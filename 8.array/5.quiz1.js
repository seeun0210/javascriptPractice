// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
fruits = ["🍌", "🍓", "🍇", "🍓"];
fruits.fill("🥝", 1, 2);
fruits.fill("🥝", 3, 4);
console.log(fruits);
console.clear();

// output: [ '🍌', '🥝', '🍇', '🥝' ]

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
fruits = ["🍌", "🥝", "🍇", "🥝"];

function countKiwi(count) {
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === "🥝") {
      count++;
    }
  }
  return count;
}

console.log(countKiwi());

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
fruits1 = ["🍌", "🥝", "🍇"];
fruits2 = ["🍌", "🍓", "🍇", "🍓"];
fruits3 = [];

for (let i = 0; i <= fruits1.length; i++) {
  for (let j = 0; j <= fruits.length; j++) {
    if (fruits1[i] === fruits2[j]) {
      fruits3.push(fruits1[i]);
    }
  }
}
console.log(fruits3);

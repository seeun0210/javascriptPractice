// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]
/*let fruits = ["🍌", "🍓", "🍇", "🍓"];
result = fruits.map((item) => {
  if (item === "🍓") {
    return "🥝";
  } else {
    return item;
  }
});
console.log(result);*/
array = ["🍌", "🍓", "🍇", "🍓"];
function replace(array, from, to) {
  return array.map((item) => (item === from ? to : item));
}
console.log(replace(array, "🍓", "🥝"));
// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2
/*fruits = ["🍌", "🥝", "🍇", "🥝"];
result = fruits.map((item) => {
  count = 0;
  if (item === "🥝") {
    item = count++;
  }
  return count;
}); //result=[0,1,0,1]
sum = result.reduce((sum, value) => (sum += value), 0);
console.log(sum);*/
function count(array, item) {
  return array.filter((value) => value === item).length;
  /*return array.reduce((count, value)=>{
        if(value===item){
            count++;
        }
        return count;
    },0);*/
}
// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
input = ["🍌", "🥝", "🍇"];
search = ["🍌", "🍓", "🍇", "🍓"];
// output: [ '🍌', '🍇' ]
function count(input, search) {
  return input.filter((item) => search.includes(item));
}
console.clear();
// 퀴즈 4

// 5이상(보다 큰)의 숫자들의 평균

const nums = [3, 16, 5, 25, 4, 34, 21];
const result2 = nums
  .filter((num) => num > 5)
  .reduce((avg, num, _, array) => avg + num / array.length, 0);
console.log(result2);
/*nums2 = nums.map((item) => {
  if (item >= 5) {
    return item;
  } else {
    return 0;
  }
});
nums3 = nums.map((item) => {
  if (item >= 5) {
    return 1;
  } else {
    return 0;
  }
});
numerator = nums2.reduce((sum, value) => (sum += value), 0);
console.log(numerator);
denumerator = nums3.reduce((sum, value) => (sum += value), 0);
console.log(numerator / denumerator);*/

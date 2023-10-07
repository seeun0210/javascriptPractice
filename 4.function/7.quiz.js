//주어진 숫자 만큼 0부터 순회하는 함수
//순회하면서 주어진 특정한 일을 수행해야 함
//5, 순회하는 숫자를 다 출력하고 싶음
//5, 순회하는 숫자의 두배값을 다 출력하고 싶음
/*function action1(max) {
  for (let i = 0; i <= max; i++) {
    console.log(i);
  }
  return;
}
function action2(max) {
  for (let j = 0; j <= max; j++) {
    console.log(j * 2);
  }
  return;
}

function iterate(max, action) {
  let result = action(max);
  console.log(result);
  return result;
}
iterate(5, action2);
*/
//
setTimeout(() => {
  console.log("3초뒤 이 함수가 실행될거예요");
}, 3000);

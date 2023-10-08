// 주어진 seconds(초)가 지나면 callback함수를 호출함
// 단, seconds가 0보다 작으면 에러를 던지자!
function runInDelay(callback, seconds) {
  //   if (seconds < 0) {
  //     console.log("error!");
  //   } else {
  //     setTimeout(() => {
  //       callback();
  //     }, seconds * 1000);
  //   }
  if (!callback) {
    throw new Error("callback함수 전달 해야함!");
  }
  if (!seconds || seconds < 0) {
    throw new Error("seconds는 0보다 커야 함!");
  }
  setTimeout(callback, seconds * 1000);
}
runInDelay(() => console.log("타이머 완료"), 3);

// try-catch로 에러가 발생해도 어플리케이션이 강제종료 되지 않도록 함
try {
  runInDelay(() => console.log("음수임"), -1);
} catch (error) {}

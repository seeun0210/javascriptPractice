function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🍌");
    }, 1000);
  });
}
function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("🍎");
    }, 3000);
  });
}
function getOrange() {
  return Promise.reject(new Error("no Orange!"));
}
// 바나나와 사과를 같이 가지고 오기
// [순차적으로 실행]
getBanana()
  .then(
    (
      banana //바나나가져오는데 1초
    ) =>
      getApple().then((apple) => {
        //사과 가져오는데 3초
        return [banana, apple];
      })
  )
  .then(console.log); //총 4초 후에 콘솔 찍힘
//  [병렬적으로 실행]
// Promise.all 병렬적으로 한번에 모든 Promise들을 실행
Promise.all([getApple(), getBanana()]).then((fruits) =>
  console.log("all", fruits)
);
// 총 3초만에 실행됨

// Promise.race 주어진 Promise 중에 제일 빨리 수행된 것이 이김
Promise.race([getBanana(), getApple()]).then((fruits) =>
  console.log("race", fruits)
);
// 여기에서는 1초만에 뜨는 바나나만 출력됨

Promise.all([getApple(), getBanana(), getOrange()])
  .then((fruits) => console.log("all-error", fruits))
  .catch(console.log);
//   여기에서는 getOrange에서 에러가 가장 먼저 발생하니까 에러 메시지가 뜸
// 그래서 배열에 들어있는 것들이 수행되었는지 리젝트 되었는지 상태를 알기위해서는 allSettled를 사용함
Promise.allSettled([getApple(), getBanana(), getOrange()])
  .then((fruits) => console.log("allsettled", fruits))
  .catch(console.log);
// allsettled [
//   { status: 'fulfilled', value: '🍎' },
//   { status: 'fulfilled', value: '🍌' },
//   {
//     status: 'rejected',
//     reason: Error: no Orange!
//         at getOrange (C:\Users\김세은\OneDrive\바탕 화면\JAVASCRIPT\javascriptPractice\13.promise\6.promise-all.js:16:25)
//         at Object.<anonymous> (C:\Users\김세은\OneDrive\바탕 화면\JAVASCRIPT\javascriptPractice\13.promise\6.promise-all.js:49:46)
//         at Module._compile (node:internal/modules/cjs/loader:1256:14)
//         at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)
//         at Module.load (node:internal/modules/cjs/loader:1119:32)
//         at Module._load (node:internal/modules/cjs/loader:960:12)
//         at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//         at node:internal/main/run_main_module:23:47
//   }

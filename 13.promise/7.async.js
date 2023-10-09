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
//바나나와 사과 같이 가지고 오기
async function fetchFruits() {
  //promise가 리턴됨
  // [after]
  const banana = await getBanana();
  const apple = await getApple();
  return [banana, apple];
  // [before]
  //   return getBanana().then((banana) =>
  //     getApple().then((apple) => [banana, apple])
  //   );
}
fetchFruits().then((fruits) => console.log(fruits));

function fetchEgg(chicken) {
  return Promise.resolve(`${chicken}=>egg`);
}
function fryEgg(egg) {
  return Promise.resolve(`${egg}=>fryEgg`);
}
function getChicken() {
  //   return Promise.reject(new Error("chicken을 받아올 수 없음"));
  return Promise.resolve("🌱=>chicken");
}
getChicken()
  .catch(() => "chicken")
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log);

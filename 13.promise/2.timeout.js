function execute() {
  console.log("1");
  setTimeout(() => {
    console.log("2");
  }, 3000);
  console.log("3");
}
execute();
// 1->3->2순서로 출력됨
// javascript자체는 싱글스레드로 하나의 callstack을 갖기때문에 동기적으로 실행되지만,
// setTimeout, DomAPI, setInterval, fetch, eventlisnter과 같은 WebAPIs는 비동기적으로 실행된다.

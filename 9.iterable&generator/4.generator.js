/*const multiple = {
  [Symbol.iterator]:()=> {
    const max=10;
    let num=0;
    return {
      next() {
        return { value: num++ * 2, done: num > max };
      },
    };
  },
};*/
//generator:생성기(값을 생성할 수 있는)
//generator를 사용하기 위해서는 function뒤에 '*'를 붙여주어야 함
//함수에 *를 붙이는 순간 제너레이터가 민들어지고 yield는 다음 호출까지 기다렸다가 사용자가 next를 호출해야만 i값이 증가함
function* multipleGenerator() {
  try {
    //try catch를 통해서
    for (let i = 0; i < 10; i++) {
      console.log(i);
      yield i ** 2;
    }
  } catch (error) {
    //
    console.log(error);
  }
}
const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);
multiple.throw("Error!"); //multiple 안으로 에러를 던지는 것
//multiple.return();//return을 하는 순간 그 다음 값(next)이 나오지 않고 종료됨
next = multiple.next();
console.log(next.value, next.done);

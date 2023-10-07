//while(조건){}
//조건이 false가 될 때 까지 {}코드를 반복 실행
let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}

let isActive = false;
let i = 0;
while (isActive) {
  console.log("아직살아있다!");
  if (i === 1000) {
    break;
  }
  i++;
} //조건이 맞을 때에만 실행하고 싶다면 while을

do {
  console.log("do-while 아직살아있다!");
} while (isActive);
//꼭 한번은 실행해야 한다면 do-while을 사용한다.

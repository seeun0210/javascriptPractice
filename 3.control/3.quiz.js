let num = 2;
//num의 숫자가 짝수이면 👍, 홀수라면 👎을 출력하도록
//if
/*if (num % 2 == "0") {
  console.log("👍");
} else {
  console.log("👎");
}*/
//ternary
num % 2 == "0" ? console.log("👍") : console.log("👎");
//반복되는 console.log를 줄이는 방법->emoji라는 변수에 할당
let emoji = num % 2 === 0 ? "👍" : "👎";
console.log(emoji);

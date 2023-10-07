console.log(new Date());
console.log(new Date("Jun 5,2022"));
console.log(new Date("2022-12-17T03:24:00"));
console.log(Date.now());
console.log(Date.parse("2022-12-17T03:24:00"));

const now = new Date();
now.setFullYear(2023);
now.setMonth(10); //0:1
console.log(now.getFullYear());
console.log(now.getDate());
console.log(now.getDay()); //0일요일부터 1,2,,,,,6:토요일
console.log(now.getTime());
console.log(now);

console.log(now.toString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString()); //ISO 8601형식
console.log(now.toLocaleString("en-US"));
console.log(now.toLocaleString("en-KR"));

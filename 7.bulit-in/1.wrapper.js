//래퍼객체(Wrapper OBject)
//원시값을 필요에 따라서 관련된 빌트인 객체로 변환한다.
const number = 123; //number 원시 타입
const text = "text";
console.log(text);
text.length; //String객체
text.trim();

console.log(number.toString()); //number 원시타입을 감싸고 있는 Number객체로 감싸짐
console.log(number); //number 원시타입

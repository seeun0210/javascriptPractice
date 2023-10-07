//Object literal{key:value}
//new Object()
//Object.creat();
// key-문자, 숫자, 문자열, 심볼
// value-원시값,객체(함수)
let apple = {
  name: "apple",
  "hello-bye": "🖐️",
  0: 1,
  ["hello-bye1"]: "🖐️",
};

//속성, 데이터에 접근하기 위해서는
apple.name; //마침표 표기법
console.log(appple["hello-bye1"]); //대괄호 표기법 brachet natation
apple["name"];

//속성추가
apple.emoji = "🍎";
console.log(apple.emoji);
console.log(apple["emoji"]);

//속성 삭제
delete apple.emoji;
console.log(apple);

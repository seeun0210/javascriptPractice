//set
const set = new Set([1, 2, 3]);
console.log(set); //Set(3) { 1, 2, 3 }
console.log(set.size); //3

//존재하는지 확인
console.log(set.has(2)); //true
console.log(set.has(9)); //false

//순회 (set은 iterable하기 떄문에 순회가 가능하다)
set.forEach((item) => console.log(item));
for (const value of set.values()) {
  console.log(value);
}

//새로운 아이템 추가
set.add(6);
console.log(set); //Set(4) { 1, 2, 3, 6 }
set.add(6);
console.log(set); //Set(4) { 1, 2, 3, 6 } => 같은 값을 추가하면 무시되는 것을 볼 수 있다.

//삭제
set.delete(6);
console.log(set); //Set(3) { 1, 2, 3 }

//전부 삭제
set.clear();
console.log(set); //Set(0) {}

//오브젝트 세트
const obj1 = { name: "사과", price: 8 };
const obj2 = { name: "바나나", price: 5 };
const objs = new Set([obj1, obj2]);
console.log(objs); //Set(2) { { name: '사과', price: 8 }, { name: '바나나', price: 5 } }

//[quiz]
obj1.price = 10;
objs.add(obj1);
console.log(objs); //Set(2) { { name: '사과', price: 10 }, { name: '바나나', price: 5 } }
//object는 shallow copy가 된다(즉, 동일한 주소에 대해서 값이 바뀐 것 일 뿐)

//[quiz2]
const obj3 = { name: "바나나", price: 5 };
objs.add(obj3);
console.log(objs);
// Set(3) {
//     { name: '사과', price: 10 },   =>0x11
//     { name: '바나나', price: 5 },  =>0x12
//     { name: '바나나', price: 5 }   =>0x13
//    }
// 여기에서는 새로운 주소를 갖는 obj3가 만들어 진 것이니까 set에 obj하나가 추가가 된다.

obj3.price = 8;
console.log(objs);
// Set(3) {
//     { name: '사과', price: 10 },
//     { name: '바나나', price: 5 },
//     { name: '바나나', price: 8 }
//   }

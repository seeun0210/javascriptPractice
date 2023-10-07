const map = new Map([
  ["key1", "사과"],
  ["key2", "바나나"],
]);
console.log(map); //Map(2) { 'key1' => '사과', 'key2' => '바나나' }

//사이지 확인
console.log(map.size);
//존재하는지 확인(단, 키로 접근해야 함)
console.log(map.has("key1")); //true
console.log(map.has("key6")); //false

//순회
map.forEach((value, key) => console.log(key, value));
// key1 사과
// key2 바나나
console.log(map.keys());
// [Map Iterator] { 'key1', 'key2' }
console.log(map.values());
// [Map Iterator] { '사과', '바나나' }
console.log(map.entries());
// [Map Entries] { [ 'key1', '사과' ], [ 'key2', '바나나' ] }

//찾기
console.log(map.get("key1")); //사과
console.log(map.get("key2")); //바나나
console.log(map.get("key4")); //undefined

//추가
map.set("key3", "키위");
console.log(map);
// Map(3) { 'key1' => '사과', 'key2' => '바나나', 'key3' => '키위' }

//삭제
map.delete("key3");
console.log(map);
// Map(2) { 'key1' => '사과', 'key2' => '바나나' }

//전부 삭제
map.clear();
console.log(map);
// Map(0) {}

//오브젝트와의 큰 차이점??
// [object]
const key = { name: "milk", price: 10 };
const milk = { name: "milk", price: 10, description: "맛있는 우유" };
const obj = { [key]: milk };
console.log(obj);
// {
//     '[object Object]': { name: 'milk', price: 10, description: '맛있는 우유' }
//   }
// [map]
const map2 = new Map([[key, milk]]);
console.log(map2);
// Map(1) {
//     { name: 'milk', price: 10 } => { name: 'milk', price: 10, description: '맛있는 우유' }
//   }

console.log(obj[key]); //{ name: 'milk', price: 10, description: '맛있는 우유' }
console.log(map2[key]); //undefined => map은 key로 접근 불가능
// map에서 특정한 키를 찾기 위해서는 get이라는 함수를 써야함
console.log(map2.get(key)); //{ name: 'milk', price: 10, description: '맛있는 우유' }

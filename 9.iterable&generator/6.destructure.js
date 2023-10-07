//구조 분해 할당 Destructuring Assignment
//데이터 뭉치(그룹화)를 쉽게 만들 수 있다
const fruits = ["🍌", "🍓", "🍎", "🥝"];
const [first, second, ...others] = fruits; //fruits 배열의 첫번째 원소는 first에 두번째 원소는 second에 나머지는 others에 할당됨
console.log(fruits[0]);
console.log(first);
console.log(second);
console.log(others);

const point = [1, 2, 8];
const [y, x, z = 0] = point; //여기에서 point에 z값 8이 우선이므로 8이 출력되게 된다.
//그리고 x와 y의 값을 바꾸기도 쉽다.
console.log(x);
console.log(y);
console.log(z);

function createEmoji() {
  return ["apple", "🍎"];
}
const array = createEmoji();
console.log(array); //이렇게 작성하면 배열의 원소의 index로 호출하게 되므로 변수이름의 의미가 없어짐
//그래서 destructure를 이용하면
const [title, emoji] = createEmoji(); //createEmoji함수의 첫번쨰 원소는 title, 두번째 원소는 emoji라는 이름으로 유의미해짐
console.log(title);
console.log(emoji);

const ellie = { name: "Ellie", age: 20, job: "s/w enginner" };
function display(person) {
  console.log("이름", person.name);
  console.log("나이", person.age);
  console.log("직업", person.job);
} //person의 이름, 나이, 직업을 출력하는 함수를 작성할 때 person.~라고 계속 person을 반복해야함
//이 'person.'의 반복을 피하기 위해서 destructure를 사용하면

function display({ name, age, job }) {
  //함수에서 변수를 받아 올 때 구조를 분해해서 받아옴
  console.log("이름", name);
  console.log("나이", age);
  console.log("직업", job);
}
display(ellie); //ellie의 구조가 분해되어 함수가 호출됨

const { name, age, job: occupation, pet = "강아지" } = ellie;
console.log(name);
console.log(age);
console.log(occupation); //ellie에서 job이라는 키는 없어지고 occupation이라는 key가 생성됨
console.log(pet);

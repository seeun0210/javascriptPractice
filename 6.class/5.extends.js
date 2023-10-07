class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log("먹자!");
  }
  sleep() {
    console.log("잔다!");
  }
}

class Tiger extends Animal {}
const tiger = new Tiger("노랑이");

console.log(tiger);
tiger.sleep();
tiger.eat();

class Dog extends Animal {
  constructor(color, ownerName) {
    super(color);
    this.ownerName = ownerName;
  }
  play() {
    console.log("놀자!");
  }
  //오버라이딩 overriding
  eat() {
    super.eat(); //super:부모의 생성자 함수를 이용
    console.log("강아지가 먹는다!");
  }
}
const dog = new Dog("빨강이", "세은");
console.log(dog);
dog.sleep();
dog.eat();
dog.play();

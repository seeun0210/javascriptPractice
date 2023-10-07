class Fruit {
  static Max_FRUITS = 4;
  //생성자:new 키워드로 객체를 생성할때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  //클래스 레벨의 메서드->클래스 레벨에서 공통적으로 사용될 수 있는 속성과 함수는 static을 사용하는 것이 좋다
  static makeRandomFruit() {
    return new Fruit("banana", "🍌");
  }
  //인스턴스 레벌의 메서드
  display = () => {
    console.log(`${this.name}:${this.emoji}`);
  };
  //return this;//생략 가능
}

const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.Max_FRUITS);

// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit("apple", "🍎");
// orange는 Fruit 클래스의 인스턴스이다.
const orange = new Fruit("orange", "🍊");

Math.pow();
Number.isFinite(1);

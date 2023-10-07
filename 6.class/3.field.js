//접근 제어자-캡슐화(내부에서 저장된 데이터를 외부에서 변경 불가능)
//private(#), public(기본), protected
class Fruit {
  #name;
  #emoji;
  type = "과일";
  static Max_FRUITS = 4;
  //생성자:new 키워드로 객체를 생성할때 호출되는 함수
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }
  //클래스 레벨의 메서드->클래스 레벨에서 공통적으로 사용될 수 있는 속성과 함수는 static을 사용하는 것이 좋다
  static makeRandomFruit() {
    return new Fruit("banana", "🍌");
  }
  //인스턴스 레벌의 메서드
  #display = () => {
    console.log(`${this.name}:${this.emoji}`);
  };
  //return this;//생략 가능
}

const apple = new Fruit("apple", "🍎");
apple.#name = "오렌지"; //#field는 외부에서 접근이 불가능함
console.log(apple);

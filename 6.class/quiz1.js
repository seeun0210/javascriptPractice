//카운터 만들기
//0이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카우터를 만들기
// Counter 클래스 만들기
/*class Counter{
    #count=0;
    constructor(num){
        if(num>=0){
            this.#count=num
        }
        this.num=num;
    }
    up(){
        this.#num++;
    }
    get count(){
        return this.#count;
    }

}*/
class Counter {
  #value;
  constructor(startValue) {
    if (isNaN(startValue) || startValue < 0) {
      this.#value = 0;
    } else {
      this.#value = startValue;
    }
  }
  get value() {
    return this.#value;
  }
  increment = () => {
    this.#value++;
  };
}
const counter = new Counter(0);
counter.increment(); //1

// Quiz

const prop = {
  name: "Button",
  styles: {
    size: 20,
    color: "black",
  },
};
//구조분해할당도 중첩적으로 가능하다

function changeColor({ styles: { color } }) {
  //styles안의 color라는 키를 구조분해 할당한다
  console.log(color);
}

changeColor(prop);

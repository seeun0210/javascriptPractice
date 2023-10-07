//증가 & 감소 연산자 Increment & Decrement Operators
let a = 0;
console.log(a);
a++; //a=a+1;
console.log(a);
a--; //a=a-1;
console.log(a);

console.clear();

//주의!
//a++ 필요한 연산을 하고, 그 뒤 값을 증가시킴
//++a 값을 먼저 증가하고, 필요한 연산을 함
a = 0;
let b = a++;
console.log(b); //a 값을 b에 먼저 할당하고 그 뒤에 a의 값을 증가
console.log(a);

c = 0;
let d = ++c;
console.log(d); //c 값을 증가시킨 후 d에 그 값을 할당
console.log(c);

// this 바인딩
// 자바, C#, C++ 대부분의 객체지향 프로그래밍 언어에서는
// this는 항상 자신의 인스턴스 자체를 가리킴
// 정적으로 인스턴스가 만들어지는 시점에 this가 결정됨.
// 하지만, js 에서는 누가 호출하냐에 따라 this가 달라짐
// 즉, this는 호출하는 사람(caller)에 의해 동적으로 결정됨

function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(`이 고양이 이름은 ${this.name}입니다`);
  };
}
function Dog(name) {
  this.name = name;
  this.printName = function () {
    console.log(`이 강아지 이름은 ${this.name}입니다`);
  };
}
const cat = new Cat('냥냥이');
const dog = new Dog('강강쥐');
cat.printName(); // 이 고양이 이름은 냥냥이입니다
dog.printName(); // 이 강아지 이름은 강강쥐입니다
console.clear();

dog.printName = cat.printName;
dog.printName(); // 이 고양이 이름은 강강쥐입니다 -> dog의 this.name 받아옴
cat.printName(); // 이 고양이 이름은 냥냥이입니다

console.clear();

function printOnMonitor(printName) {
  console.log('모니터를 준비하고, 전달된 콜백 실행');
  printName();
  // 모니터를 준비하고, 전달된 콜백 실행
  // 이 고양이 이름은 undefined입니다
  // -> object.printName처럼 printName을 호출하는 이가 없어서 undefined 출력
}
printOnMonitor(cat.printName);

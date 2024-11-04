// this 바인딩
// 하지만, js 에서는 누가 호출하냐에 따라 this가 달라짐
// 즉, this는 호출하는 사람(caller)에 의해 동적으로 결정됨
// -> 동적으로 변경되는 this를 고정하기 위한 방법

// 1. bind 함수 사용
// 2. 화살표 함수 사용

function Cat(name) {
  // 1. bind 함수를 이용하여 수동적으로 바인딩 해주기
  // this.name = name;
  // this.printName = function () {
  //   console.log(`이 고양이 이름은 ${this.name}입니다`);
  // };
  // this.printName = this.printName.bind(this);

  // 2. 화살표 함수 사용하기: arrow 함수는 렉시컬 환경에서의 this를 기억함!
  // 화살표 함수 밖에서 제일 근접한 스코프의 this를 가리킴
  this.name = name;
  this.printName = () => {
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

dog.printName = cat.printName;
dog.printName(); // 이 고양이 이름은 냥냥이입니다 -> 고양이 이름 bind되어, 무조건 냥냥이 출력
cat.printName(); // 이 고양이 이름은 냥냥이입니다

function printOnMonitor(printName) {
  console.log('모니터를 준비하고, 전달된 콜백 실행');
  printName();
  // 모니터를 준비하고, 전달된 콜백 실행
  // 이 고양이 이름은 냥냥이입니다
}
printOnMonitor(cat.printName);

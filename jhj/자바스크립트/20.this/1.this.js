// 'use strict';

/**
 * 글롤벌 컨텍스트의 this
 * - 브라우저: this = window , globalThis = window
 * - 노드:     this = 모듈,    globalThis = 글로벌객체
 */
const x = 0;
module.exports.x = x; // 모듈에 특정 값을 지정해두면
console.log(this); // this는 exports된 x 가 됨.
// 결과값 : { x: 0 }

console.log(globalThis); // setTimeout등.. node에서 제공해주는 api
// globalThis.setTimeout(); // globalThis.명령어 형태로 사용하거나
// setTimeout(); // globalThis는 생략가능
console.clear();

/**
 * 함수 내부에서의 this
 * 느슨한 모드('use strict' 미사용) : globalThis
 * 엄격 모드('use strict' 사용):      undefined
 */

function fun() {
  console.log(this); // globalThis(느슨한모드) / undefined(엄격모드)
}
fun();
console.clear();

/**
 * 생성자 함수 또는 클래스에서의 this
 * : 앞으로 생성될 인스턴트 자체
 */
function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(this.name);
  };
}
const cat1 = new Cat('이스탄불고양이');
const cat2 = new Cat('한국고양이');
cat1.printName(); // 이스탄불고양이
cat2.printName(); // 한국고양이

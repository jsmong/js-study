# this

## this 바인딩
- 자바스크립트와 타입스크립트에서는 this 바인딩이 런타임 상에서 동적으로 결정된다.
- 전역 공간에서의 this (전역 객체를 가리킴)

```javascript
const x = 0;
module.exports.x = x;
console.log(this); // { x: 0} 
```
  
||this|globalThis|
|---|---|---|
|브라우저|window 객체|window 객체|
|Node.js|모듈|global 객체|

<br/>

## 동적바인딩
- 자바스크립트에서 this는 누가 호출하냐에 따라서 달라짐. 호출하는 사람에 의해 동적으로 결정됨.
### 함수를 메서드로서 호출할 때 메서드 내부에서의 this : 메서드를 호출한 객체
```javascript
const obj = {
  inner: function() { console.log(this) }
}

obj.inner(); // { inner : f } ( === obj )
```

<br />

### 함수를 함수로서 호출할 때 함수 내부에서의 this : 전역 객체(window)
- 실행 컨텍스트를 활성화할 당시에 this가 지정되지 않은 경우 this는 전역 객체를 바라보기때문.
```javascript
const func = function () {
  console.log(this)
}

func(); // Window {...}
```

<br />

### 콜백 함수 호출 시 그 함수 내부에서의 this
- 콜백 함수의 제어권을 가지는 함수(메서드)가 콜백 함수에서의 this를 무엇으로 할지 결정
```javascript
[1,2,3].forEach(function (x) {  
  // Window {...} 와 각 요소
  // forEach(callbackFn, thisArg) => 콜백을 실행할 때 this 값을 지정할 수 있는데 지정하지 않았기때문에
  console.log(this, x); 
});

document.body.innerHTML += '<button id="a">클릭</button>'
document.body.querySelector('#a').addEventListener('click', function(e) {
  // this : addEventListener 앞의 지정된 엘리먼트와 이벤트 객체 출력
  // addEventListener()를 사용해 요소에 수신기를 부착하게 되면 수신기 내부의 this 값은 대상 요소를 가리키게 되며,
  // 이는 수신기가 매개변수로 받게 되는 이벤트 객체의 currentTarget 속성과 같습니다.
  console.log(this. e);
})
```

<br />

### 생성자 함수 내부에서의 this
- 생성자 함수를 통해 새로 만들어진 인스턴스 자신을 가리킴
```javascript
function Cat(name, age) {
  this.name = name;
  this.age = age;
}

const nabi = new Cat('나비', 3);
console.log(nabi)
// Cat { name : '나비', age: 3 }
```

<br />

## 동적바인딩의 문제점
- 메서드의 this와 메서드 내부의 중첩 함수 또는 콜백 함수의 this가 불일치하는 문제가 발생
```javascript
const person = {
  name: '영인'
  foo(callback) {
    setTimeout(callback, 100);
  }
};

person.foo(function() {
  // Window.name
  // 안녕, 내 이름은 .
  console.log(`안녕, 내 이름은 ${this.name}.`) 
})
```
- person.foo의 콜백 함수가 호출되기 이전 => this : person 객체를 가리킴
- person.foo의 콜백 함수가 일반 함수로서 호출 => this : 전역 객체 Window(node.js에서는 undefined)
- person.foo의 콜백 함수는 person.foo를 돕는 보조 함수 역할을 하기 때문에 this가 상이하면 문맥상 문제가 발생

<br />

## 정적바인딩(명시적으로 this를 바인딩하는 방법)
- 위의 동적바인딩의 문제점을 bind 메서드를 이용해 해결할 수 있다.
- bind 메서드를 사용하여 콜백 함수 내부의 this와 외부 함수 내부의 this를 일치시킨다.
```javascript
const person = {
  name: '영인'
  foo(callback) {
    setTimeout(callback.bind(this), 100);
  }
};

person.foo(function() {
  // 안녕, 내 이름은 영인.
  console.log(`안녕, 내 이름은 ${this.name}.`) 
})
```

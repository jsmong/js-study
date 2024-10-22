# 클로저

## 클로저란
- 어떤 함수 A에서 선언한 변수 a를 참조하는 내부함수 B를 외부로 전달할 경우 A의 실행 컨텍스트가 종료된 이후에도 변수 a가 사라지지 않는 현상.
- 가비지 컬렉터 동작 방식때문에 가능. 가비지 컬렉터는 어떤 값을 참조하는 변수가 하나라도 있다면 그 값은 수집 대상에 포함시키지 않음.
```javascript
var outer = function () {
  var a = 1;
  var inner = function() {
    return ++a;
  };
  return inner; // inner 함수 자체를 반환
}
var outer2 = outer(); // outer 함수 실행 컨텍스트 종료 & inner함수 참조
console.log(outer2()); // 2
console.log(outer2()); // 3
```
- 출처 : 코어자바스크립트
  
<br />

## 클로저의 활용
- 내부 정보를 은닉하고, 공개 함수(public, 외부)를 통한 데이터 조작을 위해 캡슐화와 정보은닉
- 클래스 private 필드 또는 메소드를 사용하는 효과와 동일
```javascript
function makeCounter() {
  let count = 0;  // 은닉하고자하는 데이터
  function increase() { // 이 공개함수만을 통해서 내부 데이터를 조작
    count++;
    console.log(count);
  }
  return increase;
}
```

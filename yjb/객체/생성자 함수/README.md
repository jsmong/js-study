# 생성자 함수의 인스턴스 생성 과정

```javascript
function Apple(name) {
  // 1. {} 암묵적으로 빈 객체 생성후 this에 바인딩

  this.name = name; // 2. this에 바인딩되어 있는 인스턴스 초기화

  // 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환
  // return this; // 생략 가능
}
const apple = new Apple('🍎');
console.log(apple);
```

## Quiz

생성자 함수 내부에서 리턴값을 명시적으로 변경하면 어떤 값이 출력될까?

객체 리턴

```javascript
function Apple(name) {
  this.name = name;
  return {}; // 객체를 return 하면?
}
const apple = new Apple('🍎');
console.log(apple);
```

원시값 리턴

```javascript
function Apple(name) {
  this.name = name;
  return 5000; // 원시값을 return 하면?
}
const apple = new Apple('🍎');
console.log(apple);
```

# for문의 성능

> for문 에서 배열의 길이를 변수에 할당하고 그 값을 반복문에서 사용하는 것,  
> 반복문에서 매번 배열의 길이를 확인하는 것에 성능 차이가 존재한다.

일반적으로 첫 번째 방식이 약간의 성능 향상을 제공할 수 있지만, 코드의 가독성을 고려해야할 필요가 있다.  
javascript엔진은 최적화를 통해 위 성능 차이를 최소화하기 위한 최적화 기능을 가지고 있지만 최적화는 항상 모든 경우에 완벽하게 동작하진 않는다.

-> 코드 작성시 가독성과 유지 보수성을 고려

```javascript
const arr = Array(1000000).fill(1);

console.time('for 1');
const cnt = arr.length; // arr 배열의 길이를 변수에 담은 후 반복
for (let i = 0; i < cnt; i++) {}
console.timeEnd('for 1'); // 1.56787109375 ms

console.time('for 2');
for (let i = 0; i < arr.length; i++) {} // arr 배열의 길이를 반복적으로 참조
console.timeEnd('for 2'); // 2.43994140625 ms

console.time('for 3');
for (var i = 0; i < arr.length; i++) {}
console.timeEnd('for 3'); // 3.9150390625 ms

console.time('forEach');
arr.forEach(function (item, index) {});
console.timeEnd('forEach'); // 6.47509765625 ms

console.time('for-in');
for (let idex in arr) {
}
console.timeEnd('for-in'); // 73.441162109375 ms

console.time('for-of');
for (let idex of arr) {
}
console.timeEnd('for-of'); // 5.985107421875 ms
```

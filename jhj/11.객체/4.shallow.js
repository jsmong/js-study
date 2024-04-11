// 얕은 복사 Shallow Copy - 객체는 메모리 주소 전달(값이아니라 메모리 주소!)
// 자바스크립트에서 복사 할때는 항상 얕은 복사가 이루어짐
// Array.from, concat, slice, sprea(...), Object.assign
// 중첩시에도 같음!
const pizza = { name: '🍕', price: 2 };
const ramen = { name: '🍜', price: 3 };
const chicken = { name: '🐔', price: 1 };
const store1 = [pizza, ramen];
const store2 = Array.from(store1);
console.log('store1 :', store1);
console.log('store2 :', store2);

store2.push(chicken); // 치킨 추가는 store2에만 반영
console.log('store1 :', store1);
console.log('store2 :', store2);

pizza.price = 4; // 가격 인상은 store1, 2 모두 반영된다.
// 두 store에서 가리키는 pizza의 메모리 위치는 같으니까!
console.log('store1 :', store1);
console.log('store2 :', store2);

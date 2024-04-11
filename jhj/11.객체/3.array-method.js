// 배열의 함수들
// ** 배열 자체를 변경하는지, 새로운 배열을 반환하는지

const fruits = ['🍎', '🍊', '🍌', '🍇'];

// 특정한 오브젝트가 배열인지 체크 - isArray
console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

// 특정한 아이템의 위치를 찾을때 - indexOf
console.log(fruits.indexOf('🍎'));

// 배열안에 특정 아이템이 있는지 체크 - includes
console.log(fruits.includes('🍇'));

// 추가 - 제일 뒤 - push
fruits.push('🍉'); // 배열 자체를 수정(업데이트)
console.log(fruits);

// 추가 - 제일 앞 - unshift
fruits.unshift('🍑'); // 배열 자체를 수정(업데이트)
console.log(fruits);

// 제거 - 제일 뒤 - pop
let lastItem = fruits.pop();
console.log(fruits); // 배열 자체를 수정(업데이트)
console.log(lastItem); // 삭제된 요소를 return

// 제거 - 제일 앞 - shift
lastItem = fruits.shift();
console.log(fruits); // 배열 자체를 수정(업데이트)
console.log(lastItem); // 삭제된 요소를 return

// 중간에 추가 또는 삭제 - splice
const deleted = fruits.splice(1, 1); // 1번 인덱스부터 1개 삭제
console.log(fruits);
console.log(deleted);

// 추가하기 - splice
const added = fruits.splice(1, 0, '🍍', '🍏'); // 1번 인덱스에 추가
console.log(fruits);
console.log(added);

// 잘라진 새로운 배열을 만듦 - slice
// slice(시작index, 끝index+1)
let newArr = fruits.slice(2, 2); //0,1만 슬라이스
console.log(newArr); // 잘라진 0,1
console.log(fruits); // 기존 배열은 그대로 유지
newArr = fruits.slice(1); // 1부터 끝까지 slice
console.log(newArr);
newArr = fruits.slice(-1); // 1부터 끝까지 slice
console.log(newArr); // 거꾸로 1부터 끝까지

// 여러개의 배열을 붙여줌 - concat
// arr1.concat(arr2)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3); // 기존의 배열 수정 x, 새로운 배열 반환

// 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);

// 중첩 배열을 하나의 배열로 쫙 펴기
let arr = [[1, 2, 3], [(4, [5, 6])]];
console.log(arr);
console.log(arr.flat()); // 기본 : 1단계 중첩 배열 해제 // [ 1, 2, 3, [ 5, 6 ] ]
console.log(arr.flat(2)); // (2)숫 넣으면 중첩 단계 설정 가능 // [ 1, 2, 3, 5, 6 ]
arr = arr.flat(2);

// 특정한 값으로 배열 채우기
// 배열 자체를 수정
arr.fill(0); // 처음부터 끝까지 채울수도 있고
console.log(arr);

arr.fill('s', 1, 3); // 1부터 3전까지 s로
console.log(arr); // [ 0, 's', 's', 0, 0 ]

arr.fill('s', 1); // 1부터 끝까지 s로
console.log(arr); // [ 0, 's', 's', 's', 's' ]

// 배열을 문자열로 합하기
let text = arr.join(' | '); // 텍스트 사이에 넣고싶은 키워드 삽입 가능
console.log(text); //  0 | s | s | s | s

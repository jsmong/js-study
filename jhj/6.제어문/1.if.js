// 조건문 Conditional Statement
// if(조건) {}
// if(조건) {} else {}
// if(조건) {} else fi (조건) {} else {}
let fruit = 'orange';
if (fruit === 'apple') {
  console.log('🍎');
} else if (fruit === 'orange') {
  console.log('🍊');
} else {
  console.log('!!');
}

// 0 , '', null, undefined -> false
// 1, 'string', 2>1, ... -> true
if (undefined) {
  console.log('출력되면 안됨');
}

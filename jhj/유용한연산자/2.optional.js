// 옵셔널 체이닝 연산자 Optional Changing Operator
// ES11 (ES 2020)
// ?.
// null 과 undefined를 확인할 때
let item; // = { price: 1 };
// item이 있고, true 라면 할당해줘
const price = item?.price; // = item && item.price;
console.log(price);

console.clear();

let obj = { name: '😺', owner: { name: '현정' } };
function printName(obj) {
  // const ownerName = obj.owner.name; // 이렇게만 대입하면 obj, obj.owner, obj.owner.name 셋중 하나만 없어도 충돌!!

  // && 쓰면..
  // const ownerName = obj && obj.owner && obj.owner.name;

  // 위의 문장을 더욱 간편하게!
  const ownerName = obj?.owner?.name;

  console.log(ownerName);
}
printName(obj);

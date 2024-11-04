let count = 0;
// export default : 모듈에서 딱 1개만 export
// export : 여러개 export 할때
export function increase() {
  count++;
  console.log(count);
}
export function getCount() {
  return count;
}

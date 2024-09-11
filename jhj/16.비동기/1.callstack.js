// callstack과 single thread 가 어떻게 동작하는지 -> 동기 / 순차적으로 진행
// 어떤 점을 유의해야하는지 -> 중간에 긴 시간이 걸리는 작업이 있으면 전체 애플리케이션이 늘어남

function a() {
  // 중간에 오래걸리는 작업이 있으면 전체 애플리케이션 속도가 낮아진다.
  for (let i = 0; i < 1000000000; i++);
  return 1;
}

function b() {
  return a() + 1;
}

function c() {
  return b() + 1;
}

console.log('시작');
const result = c(); // callstack : c() -> b() -> a()
console.log(result); // 3

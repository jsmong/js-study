// 자바스크립트 callstack, 자체는 동기적으로 시행되지만
// node, browser 등 멀티쓰레드 환경에서 .. 제공함
// Web API (setTimeout, setInterval, fetch ...)을 통해서 비동기적으로 코드를 수행할 수도 있다.

function execute() {
  console.log(1);
  setTimeout(() => {
    console.log(2);
  }, 3000);
  console.log(3);
}
execute();

// JSON : JavaScript Object Notation
// 서버와 클라이언트 간의 HTTP 통식을 위한 오브젝트 형태의 텍스트 포멧
// stringify(object): JSON
// parse(JSON): object

const me = {
  name: '현정',
  age: 20,
  eat: () => {
    console.log('eat');
  },
};

// 직렬화 Serializing : 객체를 문자열로 변환

const json = JSON.stringify(me);

console.log(me); //{ name: '현정', age: 20, eat: [Function: eat] }
console.log(json); // {"name":"현정","age":20}
// json은 순수 문자열
// 데이터는 문자열로 변환이 가능하지만, 함수는 포함되지 않는다

// 역직렬화 Deserializing  : 문자열 데이터를 자바스크립트 객체로 변환
const obj = JSON.parse(json);
console.log(obj); // { name: '현정', age: 20 }

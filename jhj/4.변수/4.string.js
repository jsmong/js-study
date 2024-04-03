// 문자열 타입
let string = '안녕하세요';
string = `안녕!`;
console.log(string);

// 특수 문자 출력하는 법
string = '"안녕"';
console.log(string);

string = `안녕!\n앨리야!\t\t내이름은\\\u09AC`;
console.log(string);

// 탬플릿 리터럴 (Template Literal)
let id = '앨리';
let greetings = "'안녕!," + id + '\n즐거운 하루 보내요!';
greetings = `안녕!, ${id}
즐거운 하루 보내요`;
console.log(greetings);

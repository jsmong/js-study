// try catch finally
function readFile(path) {
  // throw new Error('파일 경로를 찾을수 없음'); // 에러를 강제적으로 발생
  return '파일내용';
}

function processFile(path) {
  let content;
  try {
    content = readFile(path);
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    content = '기본내용';
  } finally {
    console.log('성공하던 실패하던 마지막으로 리소스를 정리할 수 있음');
  }
  const result = 'hi' + content;
  return result;
}

const result = processFile('경로');
console.log(result);

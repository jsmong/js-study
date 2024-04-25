// ? [Iterator]
// ? 0부터 10 이하까지의 숫자의 2배를 순회하는 이터레이터 만들기
// ? 일반 객체에 [Symbol.iterator]를 호출했을 때 Iterator가 나오고
// ? 그 안에 { next(): { value, done }};을 반환해야 함

// todo
const multiple = {
  [Symbol.iterator]: () => {
    let cur = 0;
    return {
      next: () => {
        if (cur <= 10) {
          return { value: cur++ * 2, done: false }
        } else {
          return { done: true }
        }
      }
    }
  }
};

// ! answer
const answerMultiple = {
  [Symbol.iterator]: () => {
    const max = 10;
    let num = 0;
    return {
      next() {
        return { value: num * 2, done: num > max }
      }
    }
  }
}

// * Refactoring
// done이 true인데도 value값을 출력해도 되는걸까?
const refactoringMultiple = {
  [Symbol.iterator]: () => {
    let cur = 0;
    return {
      next: () => {
        const done = cur >= 10;
        cur++;
        return { value: cur * 2, done }
      }
    }
  }
}

// --------------------------------------------------------------

// ? [Generator]
// ? changeColor 호출 시 props.styles.color에 접근하는게 아니라
// ? 구조분해할당을 이용해 바로 color에 접근하도록 인자 만들어보기

const prop = {
  name: 'Button',
  styles: {
    size: 20,
    color: 'black',
  },
};

// ! answer (못풀었음😂)
function changeColor({ styles: { color } }) {
  console.log(color);
  // console.log(styles); // styles is not defined
  // -> 중첩된 값을 꺼내기 위한 단순 key, 변수값이 아니라 사용할 수 없음!
}

changeColor(prop);
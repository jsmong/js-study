# 자바스크립트에서의 this

![this 설명 이미지](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F8VQjy%2FbtscjmkMnqS%2FB6FkkLKeTcRnZJYAnZDbx0%2Fimg.png)

- 실행컨텍스트 생성 시 `동적으로 바인딩`되는 this

- 명시적으로 바인딩하는 방법
  
    1. call, apply, bind

    2. this값 직접 지정 (임의로 this값을 만들어서 그 값을 바라보게끔 설정)
 
<br /><br />

# 화살표 함수에서의 this

## 일반 함수에서의 this

- 함수가 호출되는 방식에 따라 동적으로 결정됨 (위의 사진과 같음)

<br />

## 화살표 함수에서의 this

- this가 함수 자체에 정의되지 않고, 함수가 생성될 때 그 함수를 둘러싼 외부 함수에서의 this를 상속받음
    
    ⇒ `자체 this를 가지지 않고, 생성 시 상위 스코프에서 this 상속`
    
- 이는 코드의 예측 가능성을 높여주며, 특히 `콜백 함수`나 `클로저`에서 유용하게 사용됨

<br />

## 예시 코드

```javascript
  function setup() {
    const button = document.createElement('button');
    button.textContent = '클릭하세요';
    document.body.appendChild(button);
  
    let count = 0;
  
    // 일반 함수 사용
    button.addEventListener('click', function() {
  		// ✅ 호출될 때 이벤트를 발생시킨 요소(button)을 this로 가짐
  		// ✅ 따라서 버튼의 텍스트를 클릭 수와 함께 업데이트 할 수 있음
      console.log('일반 함수:', this);
      this.textContent = `클릭 수: ${++count}`;
    });
  
    // 화살표 함수 사용
    button.addEventListener('click', () => {
  	  // ✅ 화살표 함수에서의 this는 상위 스코프의 this를 상속받음
  	  // ✅ 따라서 setup 함수가 실행되는 컨텍스트(여기서는 전역 스코프)의 this를 상속받음
  	  // ✅ 웹 브라우저에서 전역 스코프의 this는 window 객체이므로, 여기서는 window가 됨
      console.log('화살표 함수:', this);
      console.log('화살표 함수 내 this:', this.document === document); // true
    });
  }
  
  setup();
```

<br /><br />

#  Vue.js에서의 this

```vue
  <template>
    <div>{{ computedFullName }}</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        firstName: 'John',
        lastName: 'Doe'
      }
    },
    computed: {
      computeFullName() {
        return `${this.firstName} ${this.lastName}`;
      }
    }
  </script>
```

- 일반 자바스크립트에서는 함수의 호출 방식에 따라 this가 바인딩되는 반면, vue에서는 this가 항상 `해당 컴포넌트의 인스턴스`를 가리킴
  
- 따라서 컴포넌트의 데이터, 프로퍼티, 메서드 등을 안정적으로 접근할 수 있음

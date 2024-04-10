# 객체

### 데이터 타입

- 단일 데이터
    - 원시(primitive)
        - number
        - bigInt
        - string
        - boolean
        - null
        - undefined
        - symbol
- 복합 데이터
    - 객체(object) - heap 메모리에 저장됨
      - object
      - function

```jsx
// 순수 데이터 객체
let apple = {
	name: 'apple',
	color: 'red'
}
```

```jsx
// 상태와 행동 객체
let apple = {
	name: 'apple',
	display: function() {
		console.log('🍎')
	}
}
```

💡 밀접하게 관련 있는 상태와 행동을 객체로 묶자!

### 객체 생성 방법

- Object literal
    - key - 문자, 숫자, 문자열, 심볼 가능
    - value - 원시값, 객체(함수) 가능
- new Object()
- Object.create()

💡 브라켓 노테이션은 동적으로 접근하거나 추가, 삭제할 때 주로 사용함.

```jsx
function Fruit(name, emoji) { // 생성자 함수명은 대문자로
	this.name = name
	this.emoji = emoji
	this.display = () => {
		console.log(`${this.name}: ${this.emoji}`)
		return this // 생성자 함수에서는 자동으로 this를 return하므로 생략 가능
}

const apple = new Fruit('apple', '🍎')
const orange = new Fruit('orange', '🍊')

console.log(apple, orange)
```

💡 비슷한 구조의 객체를 여러 개 만들어야 할 경우 생성자 함수를 사용하면 편하다.

# 연산자(Operators)

- 단축 평가(short-circuit evaluation)
    
    ```jsx
    const person1 = {name: 'hazel'}
    const person2 = {name: 'tom'}
    
    let result = person1 && person2
    console.log(result) // person1이 true이니 person2 할당됨
    
    result = person1 || person2
    console.log(result) // person1이 true이니 이후 표현식 평가하지 않고 person1 할당됨
    ```
    
    - if 문에서 논리 연산자(&&, ||) 사용할 때는 모든 표현식들이 평가되지만,  변수에 할당하는 경우는 평가되지 않고 단축 평가 후 할당된다.
    - default parameter는 전달하지 않거나, undefined인 경우에만 설정됨 (이 때, 0과 null도 함께 막고 싶다면, message || ‘Hello’ 이런 식으로 사용할 수 있다.)
- ?? (Nullish Coalescing Operator)
    
    ```jsx
    let num = 0
    console.log(num || '-1') // -1
    console.log(num ?? '-1') // 0
    ```
    
    - ||는 falshy한 경우 할당, ??는 null, undefined인 경우 오른쪽 피연산자 반환, 아닌 경우 왼쪽 피연산자 반환

## 회고
- 객체 생성 방법 중에 Object.create()는 그동안 사용해보지 않았어서 이번에 처음 알게 되었다.
- 비슷한 구조의 객체 여러 개 만들 때 생성자 함수가 유용하다는 것을 알게 되었다.
- 그동안 연산자의 단축 평가와 널 병합 연산자를 잘 사용하지 않고 주로 조건문으로 작성해왔는데, 앞으로는 좀 더 유용하게 사용해 봐야겠다.

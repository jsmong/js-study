## 이터레이션 프로토콜

- 정의 : **순회가 가능**하기 위해 따라야 하는 규격 (for…of 나 spread 연산자 사용 가능)
    - Array
    - String
    - Map
    - Set

```jsx
interface Array<T> {
	// Array 인터페이스는 Iterator 규격을 따른다
	// Symbol.iterator 함수를 호출하면, Iterable한 Iterator를 리턴한다
	[Symbol.iterator]() : IterableIterator<T>;
}
```

keys(), entries() 같은 함수들도 이터러블을 반환. next를 호출하면서 순회한다.

```jsx
const array = [1, 2, 3]
const iterator = array.values()
// for...of를 사용해도 되고, next()로도 순회가 가능
iterator.next() // {value: 1, done: false} : 현재 값, 마지막 아이템(반복 종료) 여부

// 이런 식으로도 사용 가능
while(true) {
	const item = iterator.next()
	if(item.done) break
}
```

## 제너레이터

- 정의 : 이터러블을 준수하면서 더 간단히 만들 수 있는 생성기

```jsx
function* multipleGenerator() { // * 붙이면 제너레이터
	try {
		for(let i = 0; i < 10; i++) {
			console.log(i) // 0까지만 출력됨
			yield i ** 2 // yield : 사용자가 next를 호출할 때까지 기다렸다가 수행 (제어권 양도)
		}
	} catch(error) {
		console.log(error)
	}
}

const multiple = multipleGenerator()
let next = multiple.next()

// multiple.return()
multiple.throw('Error!') // 내부로 error 던질 수 있음

console.log(next.value, next.done)
```

## Quiz

1. 0부터 10 이하까지 숫자의 2배를 순회하는 이터레이터 만들기

```jsx
// 0, 2, 4, 6, ..., 18

const multiple = {
	[Symbol.iterator]: () => {
		let num = 0

		return {
			next() {
				return {
					value: num++ * 2,
					done: num > 10
				}
			}
		}
	}
}

for(const num of multiple) {
	console.log(num)
}

// 재사용성 개선 ver
const makeIterable = (initVal, maxVal, callback) => {
	return {
		[Symbol.iterator]: () => {
			let num = initVal
	
			return {
				next() {
					return {
						value: callback(num++),
						done: num > maxVal
					}
				}
		  }
	  }
	}
}

const multiple = makeIterable(0, 10, (n) => n * 2)

for(const num of multiple) {
	console.log(num)
}
```

1. 구조분해할당 하여 color를 출력하기

```jsx
const prop = {
	name: 'Button',
	styles: {
		size: 20,
		color: 'black'
	}
}

function changeColor({styles: { color }}) {
	console.log(color)
}

changeColor(prop)
```
## Set

- 특징
    - 순서, Index 없는 하나의 집합체
    - 중복 불가
    - 순회 가능

```jsx
const set = new Set([1, 2, 3])
console.log(set) // Set(3) {1, 2, 3}

set.size
set.has(2)
set.forEach((item) => console.log(item))
set.values()
set.add(4)
set.delete(4)
set.clear()

// object set
const obj1 = { name: 'hazel', age: 26 }
const obj2 = { name: 'dragon', age: 1000 }
const objSet = new Set([obj1, obj2])

// Quiz 1
obj1.age = 10
objSet.add(obj1) // (1)

// Quiz 2
obj3 = { name: 'dragon', age: 1000 }
objSet.add(obj3) // (2)
```

(1) Set의 요소는 3이 아니라 2개로 유지된다. object는 얇은 복사 되어서 동일한 주소를 참조하기 때문.

(2) Set의 요소는 3개가 된다. 새로운 object가 add 되었기 때문.

## Map

- 특징
    - 유일한 Key
    - 순서 없음
    - Key가 다르면 Value 중복 가능 (object와 유사)
    - 순회 가능

```jsx
const map = new Map([
	['key1', '🍕'],
	['key2', '🍔']
])
console.log(map) // Map(2) { 'key1' => '🍕', 'key2' => '🍔' }

map.size
map.has('key1')

map.get('key1')
map.set('key1', '🥙')
map.delete('key1')
map.clear()
```

Map과 Object는 비슷해 보이지만, 사용할 수 있는 함수가 다름.

## Quiz

1. 주어진 배열에서 중복을 제거하기
    
    ```jsx
    const nums = [1, 2, 3, 4, 5, 5, 3, 2]
    const set = new Set(nums)
    ```
    
2. 주어진 두 Set의 공통된 아이템만 담고 있는 Set 만들기
    
    ```jsx
    const set1 = new Set([1, 2, 3, 4, 5])
    const set2 = new Set([1, 2, 3])
    
    // 나의 풀이
    const resultSet = new Set()
    
    set2.forEach(item => {
    	if(set1.has(item)) {
    		resultSet.add(item)
    	}
    })
    
    // 다른 풀이
    const findInterSection = (set1, set2) => {
    	return new Set([...set1].filter((item) => set2.has(item)))
    }
    
    findInterSection(set1, set2)
    ```
    

## Symbol

- 특징
    - 유일한 Key를 생성할 수 있음 (객체 생성 시 key로 Symbol을 사용하면 외부에서 접근 불가하도록 할 수 있음)

```jsx
const map = new Map()
const key1 = 'key'
const key2 = 'key'
const key3 = Symbol('key')
const key4 = Symbol('key')

map.set(key1, 'hello')
map.get(key2) // (1)

key3 === key4 // (2) false

const k1 = Symbol.for('key')
const k2 = Symbol.for('key')

k1 === k2 // (3) true
```

(1) 다른 변수로 할당했지만, key가 동일해서 key2로 가져와도 hello가 출력됨. 원시 타입이라 값이 똑같아서 동일한 key로 간주

(2) 이름이 동일해도 Symbol로 만들면 유일한 Key가 됨.

(3) Symbol.for() : 동일한 이름으로 하나의 키를 사용할 수 있음. (전역 심벌 레지스트리)
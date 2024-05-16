# JavaScript 데이터 구조 및 기호

## 1. Map

### Map 의 장점

1. <code>객체</code>의 Key는 <code>strings</code>지만, <code>Map</code>의 Key는 모든 값을 가질 수 있다.
2. <code>객체</code>는 수동으로 크기를 추적해야 하지만, <code>Map</code>은 크기를 쉽게 알 수 있다.
3. <code>Map</code>은 삽입된 순서대로 반복된다.
4. <code>객체</code>에는 prototype 이 있어 <code>Map</code>에 기본 키들이 있다.

### 객체 또는 Map을 결정하는 사항

- <code>Map</code> : 실행 시 까지 키를 알 수 없고, 모든 키가 동일한 type이며 모든 값들이 동일한 type 일 때
- <code>객체</code> : 각 개별 요소에 대해 적용해야 하는 로직이 있을 때

경우에 따라 <code>객체</code>만 사용하기엔 불편한 점이 있어서 이를 보완하고자 <code>Map</code>을 사용

## 2. 데이터 변경이 잦을 경우 Map을 사용

![alt text](https://velog.velcdn.com/images/himprover/post/bb6fa004-61b6-4b4c-b262-6dac7c975ede/image.png)

대표적인 예로 쇼핑몰 등의 검색 사이트에서 필터링이 있다.

### 객체로 필터링 기능 구현

```jsx
const data = [
  {
    이름: 'SPA-NKG1CU',
    카테고리: '유선키보드',
    제조사: '삼성전자',
    키방식: '기계식',
    접점방식: '청축',
  },
  {
    이름: 'GK898B',
    카테고리: '무선키보드',
    제조사: '한성컴퓨터',
    키방식: '무접점(광축)',
    접점방식: '광축(클릭)',
  },
];
```

<code>필터링</code>할 내용을 저장 할 빈 <code>객체</code>를 하나 만든다.
그리고 '필터링 목록 추가', '필터링 목록 삭제', '필터링 목록 초기화' 기능을 만들어준다.

```jsx
// filters 빈 객체 생성
let filters = {};
```

```jsx
// 필터링 목록 추가
const addFilters = (filters, key, value) => {
  filters[key] = value;
};

// 필터링 목록 삭제
const removeFilters = (filters, key) => {
  delete filters[key];
};

// 필터링 목록 초기화
const clearFilters = (filters) => {
  filters = {};
  return filters;
};
```

### 추가, 삭제, 전체삭제 3가지 기능이 존재하는데 그 동작 방법이 모두 다름

- 추가 : [key]를 이용
- 삭제 : delete를 이용
- 전체삭제 : 변수 재할당 (new Object())를 이용

Map에서는 이를 보완하기 위해 전용 메서드가 존재하는 등 예측이 가능하도록 구현

### Map으로 필터링 구현

Map으로 filters를 선언<br>
<code>Map</code>은 new Map();으로 선언 할 수 있다.

```jsx
let filters = new Map();
```

그리고 데이터를 추가하려면 set() 메서드를 사용한다.<br>
인자값은 두 개가 전달되며, 순서대로 key, value이다.

```jsx
filters.set('이름', 'SPA-NKG1CU');
```

체이닝을 사용하면 새 Map을 생성하고 바로 데이터를 추가할 수 있다.

```jsx
let filters = new Map()
  .set('이름', 'SPA-NKG1CU')
  .set('카테고리', '유선키보드')
  .set('제조사', '삼성전자')
  .set('키방식', '기계식')
  .set('접점방식', '청축');
```

Map의 데이터를 key로 가져오려면 get() 메서드를 사용하면 된다.

```jsx
filters.get('이름');
```

Map의 데이터를 제거하려면 delete() 메서드를 사용한다.

```jsx
filters.delete('이름');
filters.get('이름');
```

Map의 모든 데이터를 삭제하려면 clear() 메서드를 사용한다.

```jsx
filters.clear();
filters.get('이름');
```

필터링 목록을 조작하는 추가, 삭제, 전체삭제 기능을 Map으로 만들게 되면

```jsx
const filters = new Map();

// 필터링 목록 추가
const addFilters = (filters, key, value) => {
  filters.set(key, value);
};

// 필터링 목록 삭제
const removeFilters = (filters, key) => {
  filters.delete(key);
};

// 필터링 목록 초기화
const clearFilters = (filters) => {
  filters.clear();
};
```

<br/>

## 2. Set

Set은 각 고유 항목을 하나만 갖는 간단한 컬렉션이다.

```jsx
const data = [
  {
    이름: 'SPA-NKG1CU',
    카테고리: '유선키보드',
    제조사: '삼성전자',
    키방식: '기계식',
    접점방식: '청축',
  },
  {
    이름: 'GK898B',
    카테고리: '무선키보드',
    제조사: '한성컴퓨터',
    키방식: '무접점(광축)',
    접점방식: '광축(클릭)',
  },
  {
    이름: 'SKG-3000UB',
    카테고리: '유선키보드',
    제조사: '삼성전자',
    키방식: '멤브레인',
    접점방식: '멤브레인',
  },
];
```

### 제조사를 따로 수집하고 싶다면?

- Map 사용

```jsx
// map()을 아는 사람
data.map((value) => value['제조사']);
```

```jsx
실행결과: ['삼성전자', '한성컴퓨터', '삼성전자'];
```

- Set 사용

```jsx
const 제조사 = ['삼성전자', '한성컴퓨터', '삼성전자'];
const newArray = new Set(제조사);
```

```jsx
실행결과: ['삼성전자', '한성컴퓨터'];
```

![alt text](https://velog.velcdn.com/images/himprover/post/827e17f1-e46f-46e1-9d36-6bbfe20898c9/image.png)

newArray가 Array가 아닌 Set 형식이기에
스프레드 연산자 활용해 변경

```jsx
const getUnique = (element) => {
  return [...new Set(element)];
};
```

![alt text](https://velog.velcdn.com/images/himprover/post/36b7e935-7689-4220-ac87-3a0cff53426b/image.png)

Set을 이용해 원하는 속성을 한번에 중복 없이 분류하며
reduce()를 사용하면 이 코드에서 더 간단하게 하는 것도 가능하다.

## 3. 주석 처리

주석은 코드를 설명하는 것보다는 왜(WHY)와 어떻게(HOW)를 설명하는 것이 좋다.<br>
한 줄 주석은 //를 사용하며, 필요한 경우 TODO나 FIXME와 같이 특정 작업을 기록할 수 있다.

## 4. 에러 처리

```jsx
function getUserDetails(userId) {
  try {
    const userDetails = fetchUserFromDatabase(userId);
    return userDetails;
  } catch (error) {
    console.error(
      '사용자 정보를 가져오는 중 오류가 발생했습니다:',
      error.message
    );
    return null;
  }
}
```

<code>getUserDetails</code> 함수에서 사용자 정보를 가져오는 과정에서 발생할 수 있는 오류를 처리<br> 만약 데이터베이스에서 사용자를 찾는 도중에 오류가 발생하면 catch 블록이 실행되고, 오류 메시지가 콘솔에 기록됩니다. 그리고 null이 반환되어 서비스의 안정성을 유지

## 5. 에러 버블링

```jsx
function getProductDetails(productId) {
  try {
    const productDetails = fetchProductFromAPI(productId);
    return productDetails;
  } catch (error) {
    console.error(
      '제품 정보를 가져오는 중 오류가 발생했습니다:',
      error.message
    );
    throw error; // 에러를 상위 호출자에게 전파
  }
}

function displayProductDetails(productId) {
  try {
    const productDetails = getProductDetails(productId);
    console.log('제품 정보:', productDetails);
  } catch (error) {
    console.error(
      '제품 정보 표시 중 오류가 발생했습니다:',
      error.message
    );
  }
}
```

<code>getProductDetails</code> 함수에서는 API에서 제품 정보를 가져오는 도중에 오류가 발생하면 catch 블록이 실행되고, 오류를 상위 호출자에게 다시 전파<br>
<code>displayProductDetails</code> 함수에서는 <code>getProductDetails</code> 를 호출하고 제품 정보를 표시함. <br/>
만약 오류가 발생하면 해당 오류가 콘솔에 기록!

이렇게 함으로써 오류가 발생한 곳에서 오류를 처리할 수 있고, 필요한 경우에는 상위 호출자로 오류를 전달하여 중요한 예외 정보를 유지할 수 있습니다.

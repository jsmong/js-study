# typeof null === ???

### javascript의 타입

| 구분     | 타입                |
| -------- | ------------------- |
| 원시타입 | number              |
|          | string              |
|          | boolean             |
|          | undefined           |
|          | null                |
|          | symbol              |
| 객체타입 | 객체, 함수, 배열 등 |
|          |

<br />

## javascript의 null

javascript의 null은 값이 없다는 것을 `의도적으로 명시`할 때 사용

타입도 null, 값도 null인 `Primitive Type`

즉 null은 객체가 아니지만 typeof 연산자로 null의 타입을 체크해보면 'object' 가 반환되는 것을 확인할 수 있다.

```javascript
> typeof null
< 'object'
```

자바스크립트 첫 번째 버전의 버그

<br />

### typeof 명령어가 정의된 엔진의 코드

```javascript
    JS_PUBLIC_API(JSType)
    JS_TypeOfValue(JSContext *cx, jsval v)
    {
        JSType type = JSTYPE_VOID;
        JSObject *obj;
        JSObjectOps *ops;
        JSClass *clasp;

        CHECK_REQUEST(cx);
        if (JSVAL_IS_VOID(v)) {  // (1)
            type = JSTYPE_VOID;
        } else if (JSVAL_IS_OBJECT(v)) {  // (2)
            obj = JSVAL_TO_OBJECT(v);
            if (obj &&
                (ops = obj->map->ops,
                 ops == &js_ObjectOps
                 ? (clasp = OBJ_GET_CLASS(cx, obj),
                    clasp->call || clasp == &js_FunctionClass) // (3,4)
                 : ops->call != 0)) {  // (3)
                type = JSTYPE_FUNCTION;
            } else {
                type = JSTYPE_OBJECT;
            }
        } else if (JSVAL_IS_NUMBER(v)) {
            type = JSTYPE_NUMBER;
        } else if (JSVAL_IS_STRING(v)) {
            type = JSTYPE_STRING;
        } else if (JSVAL_IS_BOOLEAN(v)) {
            type = JSTYPE_BOOLEAN;
        }
        return type;
    }
```

간단하게

```javascript
if(is_undefined){  // undefined 체크
	return undefined
}else if(is_object){  // object 체크
	if(is_function){  // function 체크
		return function;
	}else{
		return object
	}
}else if(is_number){  // number 체크
	return number
}else if(is_string){  // string 체크
	return string
}else if(is_boolean){  // boolean 체크
	return boolean
}
```

1. undefined 인지 검사
2. 객체 태그를 가졌는지 검사  
   만약 (3)에서처럼 호출이 가능하거나 (4)에서처럼 내부속성인 [[Class]]의 값이 함수를 의미하면 v는 함수, 그렇지 않으면 객체를 의미
   여기서 typeof null 값이 할당
3. 후속 검사 숫자, 문자, boolean을 검사. null에 대한 명시적인 검사가 없다.

<br />

## typeof 수정 제안

답변: reject (거절)  
이유: 이미 수많은 사이트의 코드가 기존의 typeof로 작성되어 있어서, 고치면 위험

<br />

## null 타입 체크

값이 null 타입인지 확인할 때는 일치연산자 (===) 사용하기

```javascript
const isNull = null;
isNull === null; // true
```

<br />

### 주의사항

선언하지 않은 식별자를 typeof 연산자로 연산 시 ReferenceError가 발생 X, undefined 반환

```javascript
// apple 식별자 선언한 적 없음
typeof apple; /// -> undefined
```

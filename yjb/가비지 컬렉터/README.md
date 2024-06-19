# Garbage Collector

> 대부분의 언어에서 메모리 라이프 사이클은 `메모리 할당` → `메모리 사용` → `메모리 해제`의 단계를 거침  
> C같은 low-level 언어의 경우 이 라이프 사이클을 개발자가 직접 관리를 해주어야 함

### Memory Leak (메모리 누수)

아무리 조심스럽게 코드를 짜도 비워줘야할 메모리 공간을 깜빡 놓치고 남겨두는 일들이 생김  
더이상 어플리케이션에서 사용하지 않는데도 불구하고 메모리 해제가 되지 않은 상태

ex)

- 이벤트 리스터 등록 후 제거하지 않는 경우,
- setInterval() 사용 후 clearInterval() 호출하지 않는 경우 등

=> 누수된 것들이 쌓여 메모리를 꽉 채우면 컴퓨터 뻗음

### Garbage Collector(가비지 컬렉터) 도입!

자바와 같은 새로운 언어들에서는 가비지 컬렉터라는 것을 도입하기 시작  
마치 조수와 같이 개발자가 일일이 하던 일을 대신 해주게 됨

#### Managed Language, Unmanaged Language

JavaScript는 메모리를 자동으로 관리하는 `Garbage Collector(가비지 컬렉터)`를 가지고 있음.  
가비지 컬렉터는 메모리에 할당된 객체 중에서 더 이상 사용되지 않는 객체(Garbage)를 자동으로 탐지하고 제거 함.

JS에서는 개발자가 직접 메모리 할당과 해제를 하지 않아도 됨.  
객체를 생성하면 자동으로 메모리에 할당, 해당 객체가 더이상 사용되지 않으면 개발자가 직접 할당 해제하지 않아도 `Garbage Collector`가 객체를 제거

### 일하는 방식(주요 알고리즘)

1. Mark-and-sweep - 아직 필요한 것들만 마크 후, 마크 안 된 것들은 버리기

   <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqpGfK%2Fbtq5vOgrm2f%2FUHlxleW4Yg1y5GbOgdbk70%2Fimg.png" width="300"/>  
   출처: <a href="https://sustainable-dev.tistory.com/158" >https://sustainable-dev.tistory.com/158</a>

2. Reference counting
   - 한 요소가 다른 요소에게 몇 번 참조 되는지 세어서 그 수가 0이 되면 치움  
     (어떠한 값에 대해 어디에서도 참조하지 않고 있다면 제거 대상)

### 한계

사람의 판단력을 갖춘 게 아니기 때문에 지워야할 것들을 전부 잡아내진 못함  
Managed Language를 쓴다고 메모리 관리를 가비지 컬렉터에게 맡기면 안 됨

좋은 개발자가 되기 위해 메모리 관리에도 신경을 써야 함

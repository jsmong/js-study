// 자식은 부모 스코프의 변수 값을 참고할 수 있다.
// 부모는 자식 스코프의 변수 값을 참고할 수 없음
{
  const x = 1;
  {
    const y = 2;
    console.log(x); // 1
  }
  console.log(x); // 1
  // console.log(y); // 에러
}

// 자식스코프에서는 가장 가까운 부모의 변수값을 참조한다
const text = 'global'; // 전역변수, 전역 스코프 (글로벌 변수, 글로벌 스코프)
{
  const text = 'inside block1'; // 지역변수, 지역스코프 (로컬변수, 로컬 스코프)
  {
    console.log(text); // inside block1
  }
}

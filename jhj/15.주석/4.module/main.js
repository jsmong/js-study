// import increase from './counter.js'; // export defuault로 내보냈을때
// import { increase1 as increase } from './counter.js'; // 이름 바꾸고싶으면 as
// import { increase, getCount } from './counter.js'; // export로 내보냈을때
import * as counter from './counter.js';

// increase();
// increase();
// increase();
// const count = getCount();
// console.log('count : ', count);

counter.increase();
counter.increase();
const count = counter.getCount();
console.log('count : ', count);

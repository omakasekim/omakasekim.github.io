# ES11 (ES2020) 의 특징들

### `String.prototype.matchAll`

기존의 `String.prototype.match` 의 기능은 일치하는 결과값 외에는 아무런 정보도 주지 않는다. 따라서 이 기능에서 다양한 정보들을 주도록 확장된 함수이다.

* `String.prototype.match`

```javascript
const text = "From 2019.01.29 to 2019.01.30";
const regexp = /(?<year>\d{4}).(?<month>\d{2}).(?<day>\d{2})/gu;
const results = text.match(regexp);

console.log(results);
// [ '2019.01.29', '2019.01.30' ]
```

* `String.prototype.matchAll`

```javascript
const text = "From 2019.01.29 to 2019.01.30";
const regexp = /(?<year>\d{4}).(?<month>\d{2}).(?<day>\d{2})/gu;
const results = Array.from(text.matchAll(regexp));

console.log(results);
// [
//   [
//     '2019.01.29',
//     '2019',
//     '01',
//     '29',
//     index: 5,
//     input: 'From 2019.01.29 to 2019.01.30',
//     groups: [Object: null prototype] { year: '2019', month: '01', day: '29' }
//   ],
//   [
//     '2019.01.30',
//     '2019',
//     '01',
//     '30',
//     index: 19,
//     input: 'From 2019.01.29 to 2019.01.30',
//     groups: [Object: null prototype] { year: '2019', month: '01', day: '30' }
//   ]
// ]
```

### Dynamic import

동적으로 모듈을 불러오는 함수로 프라미스를 반환하며 완료(fulfilled)되면 요청한 모듈의 네임스페이스에 해당하는 객체를 반환한다.

```javascript
(async () => {
    const module = await import('./test-module.js');
    module.func();
});
```

### BigInt

7번째 원시타입으로, `MAX_SAFE_INTEGER` 를 넘어가는 값을 사용할 수 있으며 `n` 이 접미사로 붙는다.

```javascript
const bigint = BigInt(Number.MAX_SAFE_INTEGER + 1);
console.log(bigint, typeof bigint);
// 9007199254740992n bigint
```

### `Promise.allSettled`

기존의 `Promise.all` 은 거부(rejected)되는 프라미스가 하나라도 있을 경우 해당 결과값만 리턴했지만 이 함수를 사용하면 거부/완료 모두에 대한 결과값을 배열로 반환한다.

```javascript
const p1 = Promise.resolve("완료1");
const p2 = Promise.reject("거부");
const p3 = Promise.resolve("완료2");

Promise.all([p1, p2, p3]).then(console.log).catch(console.log);
Promise.allSettled([p1, p2, p3]).then(console.log);

/*
[
  { status: 'fulfilled', value: '완료1' },
  { status: 'rejected', reason: '거부' },
  { status: 'fulfilled', value: '완료2' }
]
거부
*/
```

### `globalThis`

호스트 환경마다 `this` 객체의 값이 달랐는데 이 부분을 알아서 통합시켜주었다. Node.js에선 `global` 객체로, 브라우저에선 `window` 객체로 나온다.

### Optional chaining

객체의 깊이가 깊어짐에 따라서 프로퍼티의 존재여부를 먼저 판단해야 하는데 그 때마다 `&&` 연산자를 사용해서 가독성에 좋지 못했다. 이를 `?.` 로 해결하였다.

```javascript
const book = {
    entities: {
        hashtags: ['test']
    }
};

const hashtags = book.entities && book.entities.hashtags;

// Optional chaining
const hashtags = book.entities?.hashtags;
```

### Nullish coalescing operator (null 병합 연산자)

보통 기본 값을 할당하기 위해서 `||` 를 사용하여 좌변이 `null` 이나 `undefined` 이면 다른 값을 사용하는 방식을 많이 사용하였다. 이를 `??` 로 해결하였다.

```javascript
const values = {
    nullValue: null
};

const value = values.nullValue ?? "default value";
```

이외에도 for-in 메커니즘 확정, `import.meta` 등이 있으니 필요하다면 공부하도록 하자.

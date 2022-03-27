# Frontend Guidelines

## HTML

### Semantics

HTML5은 내용물을 정확히 설명할 수 있는 여러가지 시맨틱 (의미론적)을 제공합니다. 이 여러 문법을 가용할 수 있게 해보세요. 

```html
<!-- 안좋은 예 -->
<div id=main>
  <div class=article>
    <div class=header>
      <h1>Blog post</h1>
      <p>Published: <span>21st Feb, 2015</span></p>
    </div>
    <p>…</p>
  </div>
</div>

<!-- 좋은 예 -->
<main>
  <article>
    <header>
      <h1>Blog post</h1>
      <p>Published: <time datetime=2015-02-21>21st Feb, 2015</time></p>
    </header>
    <p>…</p>
  </article>
</main>
```

사용하는 시맨틱을 정확히 이해하고 사용하세요. 엉뚱한 사용법은 안 쓰느니만 못합니다.

```html
<!-- 안좋은 예 -->
<h1>
  <figure>
    <img alt=Company src=logo.png>
  </figure>
</h1>

<!-- 좋은 예 -->
<h1>
  <img alt=Company src=logo.png>
</h1>
```

### 간결함

제발 코드 좀 짧게 쓰세요. XHTML 시절 버릇 버리세요.
```html
<!-- 나쁜 예 -->
<!doctype html>
<html lang=en>
  <head>
    <meta http-equiv=Content-Type content="text/html; charset=utf-8" />
    <title>Contact</title>
    <link rel=stylesheet href=style.css type=text/css />
  </head>
  <body>
    <h1>Contact me</h1>
    <label>
      Email address:
      <input type=email placeholder=you@email.com required=required />
    </label>
    <script src=main.js type=text/javascript></script>
  </body>
</html>

<!-- 좋은 예 -->
<!doctype html>
<html lang=en>
  <meta charset=utf-8>
  <title>Contact</title>
  <link rel=stylesheet href=style.css>

  <h1>Contact me</h1>
  <label>
    Email address:
    <input type=email placeholder=you@email.com required>
  </label>
  <script src=main.js></script>
</html>
```

### 접근성

Accessibility shouldn't be an afterthought. You don't have to be a WCAG expert to improve your
website, you can start immediately by fixing the little things that make a huge difference, such as:

접근성은 제발 추후에 생각하지 마세요. WCAG 전문가 아니여도 사이트 충분히 개선시킬 수 있습니다. 예를 들어:

* `alt` 속성을 올바르게 쓰는 법을 배우세요.
* 링크와 버튼이 그대로 작성 돼있는지? (`<div class=button>` 같은 짓 금지)
* 색깔에 의존 하지 마세요.
* 폼 컨트롤 라벨링하기


```html
<!-- 나쁜 예 -->
<h1><img alt=Logo src=logo.png></h1>

<!-- 좋은 예 -->
<h1><img alt=Company src=logo.png></h1>
```

### 언어와 문자 인코딩

루트 엘리먼트에서 제발 언어랑 인코딩 명시 하세요 

```html
<!-- 나쁜 예 -->
<!doctype html>
<title>Hello, world.</title>

<!-- 좋은 예 -->
<!doctype html>
<html lang=en>
  <meta charset=utf-8>
  <title>Hello, world.</title>
</html>
```

### 성능 

콘텐츠보다 먼저 스크립트를 로드해야 하는 타당한 이유가 없는 한 페이지 렌더링 방해하지 마세요.
스타일 시트가 무거우면 필수 요소만 먼저 불러오고 나머지는 다른 시트로 불러오세요. 두개의 HTTP 리퀘스트는 하나보다 느리지만 체감상 좋습니다.


```html
<!-- 나쁜 예 -->
<!doctype html>
<meta charset=utf-8>
<script src=analytics.js></script>
<title>Hello, world.</title>
<p>...</p>

<!-- 좋은 예 -->
<!doctype html>
<meta charset=utf-8>
<title>Hello, world.</title>
<p>...</p>
<script src=analytics.js></script>
```

## CSS

### 세미콜론

세미콜론은 CSS에서 분리용도로 사용되지만 그냥 습관적으로 붙이세요 제발

```css
/* bad */
div {
  color: red
}

/* good */
div {
  color: red;
}
```

### 박스 모델

박스 모델은 문서 공통으로 지정하는게 이상적입니다.
`* { box-sizing: border-box; }` 을 지정하는 건 괜찮지만 특정 엘리먼트의 박스 모델을 굳이 바꾸는 일은 없게 하세요.

```css
/* ㄴㄴ */
div {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}

/* ㅇㅇ */
div {
  padding: 10px;
}
```

### 흐름

피할 수 있다면 요소의 기본 동작을 변경하지 마세요.예를 들어 이미지 아래 공백을 없애려고 디스플레이를 바꾸는 일은 없어야 해요.

```css
/* ㄴㄴ */
img {
  display: block;
}

/* ㅇㅇ */
img {
  vertical-align: middle;
}
```


```css
/* ㄴㄴ */
div {
  width: 100px;
  position: absolute;
  right: 0;
}

/* ㅇㅇ */
div {
  width: 100px;
  margin-left: auto;
}
```

### 선택자

DOM 이랑 연관성 높은 셀렉터는 웬만하면  사용하지 맙시다. 3개 이상의 유사 클래스, 자손/ 셀렉터와 병합해서 사용해야 하면 그냥 클래스 속성 쓰세요.

```ㄴㄴ
/* bad */
div:first-of-type :last-child > p ~ *

/* ㅇㅇ */
div:first-of-type .info
```

셀렉터 오버로딩은 지양합시다.

```css
/* ㄴㄴ */
img[src$=svg], ul > li:first-child {
  opacity: 0;
}

/* ㅇㅇ */
[src$=svg], ul > :first-child {
  opacity: 0;
}
```

### 특이도 

`id`와 `!important`의 사용을 최소화 합시다. 

```css
/* ㄴㄴ */
.bar {
  color: green !important;
}
.foo {
  color: red;
}

/* ㅇㅇ */
.foo.bar {
  color: green;
}
.foo {
  color: red;
}
```

### 오버라이딩

하지마라 디버깅 힘들다

```css
/* ㄴㄴ */
li {
  visibility: hidden;
}
li:first-child {
  visibility: visible;
}

/* ㅇㅇ */
li + li {
  visibility: hidden;
}
```

### 상속

상속 가능한 속성들은 굳이 안 써도 되잖아요?

```css
/* ㄴㄴ */
div h1, div p {
  text-shadow: 0 1px 0 #fff;
}

/* ㅇㅇ */
div {
  text-shadow: 0 1px 0 #fff;
}
```

### 짧음

불필요한 속성은 빼고, 코드는 짧고 간결하게.

```css
/* ㄴㄴ */
div {
  transition: all 1s;
  top: 50%;
  margin-top: -10px;
  padding-top: 5px;
  padding-right: 10px;
  padding-bottom: 20px;
  padding-left: 10px;
}

/* ㅇㅇ */
div {
  transition: 1s;
  top: calc(50% - 10px);
  padding: 5px 10px 20px;
}
```

### 언어

이상한 수학 쓰지말고 그냥 영어로 쓰세요. 수학은 수학 시간에 쓰는 것으로 충분합니다.

```css
/* ㄴㄴ */
:nth-child(2n + 1) {
  transform: rotate(360deg);
}

/* ㅇㅇ */
:nth-child(odd) {
  transform: rotate(1turn);
}
```

### 벤더 프리픽스

안써도 충분히 호환됩니다..

```css
/* ㄴㄴ */
div {
  transform: scale(2);
  -webkit-transform: scale(2);
  -moz-transform: scale(2);
  -ms-transform: scale(2);
  transition: 1s;
  -webkit-transition: 1s;
  -moz-transition: 1s;
  -ms-transition: 1s;
}

/* ㅇㅇ */
div {
  -webkit-transform: scale(2);
  transform: scale(2);
  transition: 1s;
}
```

### 애니메이션

애니메이션보다 트랜지션을 애용하세요. 최대한 `opacity`나 `transform` 이외의 객체에 애니메이션 넣지 마세요.

```css
/* ㄴㄴ */
div:hover {
  animation: move 1s forwards;
}
@keyframes move {
  100% {
    margin-left: 100px;
  }
}

/* ㅇㅇ */
div:hover {
  transition: 1s;
  transform: translateX(100px);
}
```

###  단위

`px` 나 `%` 보다는  `rem` 같은 단위 쓰세요. 초보단 밀리초를 선호합니다.

```css
/* ㄴㄴ */
div {
  margin: 0px;
  font-size: .9em;
  line-height: 22px;
  transition: 500ms;
}

/* ㅇㅇ */
div {
  margin: 0;
  font-size: .9rem;
  line-height: 1.5;
  transition: .5s;
}
```

### 색

투명도가 필요하면 `rgba` 쓰세요. 하지면 항상 HEX 값으로 쓰는 습관 들이세요.

```css
/* ㄴㄴ */
div {
  color: hsl(103, 54%, 43%);
}

/* ㅇㅇ */
div {
  color: #5a3;
}
```

### 그림

CSS 로 충분히 재현 가능한 부분은 HTTP 리퀘 날리지 마세요

```css
/* ㄴㄴ */
div::before {
  content: url(white-circle.svg);
}

/* ㅇㅇ */
div::before {
  content: "";
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fff;
}
```

### 꼼수

쓰지마라 좀

```css
/* ㄴㄴ */
div {
  // position: relative;
  transform: translateZ(0);
}

/* ㅇㅇ */
div {
  /* position: relative; */
  will-change: transform;
}
```

## JavaScript

### 성능

성능 때문에 문제가 생길 일은 극히 적습니다. 차라리 성능 대신 가독성, 정확성과 표현력에 집중하세요. 코드보다는 이미지 압축, 네트워크 접근에 신경 쓰세요.


```javascript
// ㄴㄴ 
const arr = [1, 2, 3, 4];
const len = arr.length;
var i = -1;
var result = [];
while (++i < len) {
  var n = arr[i];
  if (n % 2 > 0) continue;
  result.push(n * n);
}

// ㅇㅇ
const arr = [1, 2, 3, 4];
const isEven = n => n % 2 == 0;
const square = n => n * n;

const result = arr.filter(isEven).map(square);
```

### Statelessness

 모든 함수는 (이상적으로는) 부작용이 발생하지 않고, 외부 데이터를 사용하지 않으며 기존 개체를 변경하는 대신 새 개체를 반환하는게 깔끔해요.
```javascript
// ㄴㄴ
const merge = (target, ...sources) => Object.assign(target, ...sources);
merge({ foo: "foo" }, { bar: "bar" }); // => { foo: "foo", bar: "bar" }

// ㅇㅇ
const merge = (...sources) => Object.assign({}, ...sources);
merge({ foo: "foo" }, { bar: "bar" }); // => { foo: "foo", bar: "bar" }
```

### 네이티브

네이티브 메서드는 다 이유있어서 만든겁니다. 좀 쓰세요.

```javascript
// ㄴㄴ
const toArray = obj => [].slice.call(obj);

// ㅇㅇ
const toArray = (() =>
  Array.from ? Array.from : obj => [].slice.call(obj)
)();
```

### Coercion (변환)

암시적 형 변환 써도 되면 그냥 놔두세요

```javascript
// ㄴㄴ
if (x === undefined || x === null) { ... }

// ㅇㅇ
if (x == undefined) { ... }
```

### 반복문

반복문은 가변값을 사용해야하니, `array.prototype` 를 씁시다.
```javascript
// ㄴㄴ
const sum = arr => {
  var sum = 0;
  var i = -1;
  for (;arr[++i];) {
    sum += arr[i];
  }
  return sum;
};

sum([1, 2, 3]); // => 6

// ㅇㅇ
const sum = arr =>
  arr.reduce((x, y) => x + y);

sum([1, 2, 3]); // => 6
```
쓸 상황이 안된다면, `array.prototype` 대신 재귀라도 쓰세요.

```javascript
// ㄴㄴ
const createDivs = howMany => {
  while (howMany--) {
    document.body.insertAdjacentHTML("beforeend", "<div></div>");
  }
};
createDivs(5);

// ㄴㄴ
const createDivs = howMany =>
  [...Array(howMany)].forEach(() =>
    document.body.insertAdjacentHTML("beforeend", "<div></div>")
  );
createDivs(5);

// ㅇㅇ
const createDivs = howMany => {
  if (!howMany) return;
  document.body.insertAdjacentHTML("beforeend", "<div></div>");
  return createDivs(howMany - 1);
};
createDivs(5);
```


### 인자

 `arguments` 객체보다 spread 연산자 씁시다


```javascript
// ㄴㄴ
const sortNumbers = () =>
  Array.prototype.slice.call(arguments).sort();

// ㅇㅇ
const sortNumbers = (...numbers) => numbers.sort();
```

### Apply

`apply()` 대신 Spread 씁시다

```javascript
const greet = (first, last) => `Hi ${first} ${last}`;
const person = ["John", "Doe"];

// ㄴㄴ
greet.apply(null, person);

// ㅇㅇ
greet(...person);
```

### 바인딩

 `bind()` 보다 더 나은 관용적 접근법을 씁시다

```javascript
// ㄴㄴ
["foo", "bar"].forEach(func.bind(this));

// ㅇㅇ
["foo", "bar"].forEach(func, this);
```
```javascript
// ㄴㄴ
const person = {
  first: "John",
  last: "Doe",
  greet() {
    const full = function() {
      return `${this.first} ${this.last}`;
    }.bind(this);
    return `Hello ${full()}`;
  }
}

// ㅇㅇ
const person = {
  first: "John",
  last: "Doe",
  greet() {
    const full = () => `${this.first} ${this.last}`;
    return `Hello ${full()}`;
  }
}
```

### 고계 함수

중첩 함수 제발 그만..

```javascript
// ㄴㄴ
[1, 2, 3].map(num => String(num));

// ㅇㅇ
[1, 2, 3].map(String);
```

### 합성

중첩 함수 쓰지 말고 함수 합성 하세요

```javascript
const plus1 = a => a + 1;
const mult2 = a => a * 2;

// ㄴㄴ
mult2(plus1(5)); // => 12

// ㅇㅇ
const pipeline = (...funcs) => val => funcs.reduce((a, b) => b(a), val);
const addThenMult = pipeline(plus1, mult2);
addThenMult(5); // => 12
```

### 캐싱

큰 자료구조나 비싼 작업은 캐싱 사용하세요

```javascript
// ㄴㄴ
const contains = (arr, value) =>
  Array.prototype.includes
    ? arr.includes(value)
    : arr.some(el => el === value);
contains(["foo", "bar"], "baz"); // => false

// ㅇㅇ
const contains = (() =>
  Array.prototype.includes
    ? (arr, value) => arr.includes(value)
    : (arr, value) => arr.some(el => el === value)
)();
contains(["foo", "bar"], "baz"); // => false
```

### 변수

`const` > `let` > `var`.

```javascript
// ㄴㄴ
var me = new Map();
me.set("name", "Ben").set("country", "Belgium");

// ㅇㅇ
const me = new Map();
me.set("name", "Ben").set("country", "Belgium");
```

### 조건

if, else if, else / switch 보다는 IIFE, return 씁시다.

```javascript
// ㄴㄴ
var grade;
if (result < 50)
  grade = "bad";
else if (result < 90)
  grade = "good";
else
  grade = "excellent";

// ㅇㅇ
const grade = (() => {
  if (result < 50)
    return "bad";
  if (result < 90)
    return "good";
  return "excellent";
})();
```

### 객체 반복자

 `for...in` 사용 지양하세요. 


```javascript
const shared = { foo: "foo" };
const obj = Object.create(shared, {
  bar: {
    value: "bar",
    enumerable: true
  }
});

// ㄴㄴ
for (var prop in obj) {
  if (obj.hasOwnProperty(prop))
    console.log(prop);
}

// ㅇㅇ
Object.keys(obj).forEach(prop => console.log(prop));
```

### 오브젝트를 맵처럼?

오브젝트를 사용할 경우는 많지만 맵이 보통 더 좋은 선택입니다. 오브젝트 굳이 쓸 일 없으면 맵 쓰세요.

```javascript
// ㄴㄴ
const me = {
  name: "Ben",
  age: 30
};
var meSize = Object.keys(me).length;
meSize; // => 2
me.country = "Belgium";
meSize++;
meSize; // => 3

// ㅇㅇ
const me = new Map();
me.set("name", "Ben");
me.set("age", 30);
me.size; // => 2
me.set("country", "Belgium");
me.size; // => 3
```

### 커링

커링이란 다중 인수를 갖는 함수를 단일 인수로 갖는 함수들의 함수열로 바꾸는 것이라고 합니다. 제대로 쓰이는 일 잘 없으니 그냥 쓰지 마세요..

```javascript
// ㄴㄴ
const sum = a => b => a + b;
sum(5)(3); // => 8

// ㅇㅇ
const sum = (a, b) => a + b;
sum(5, 3); // => 8
```

### 가독성

짧게 쓰려고 가독성 망치지 마세요. 나중에 와서 못 알아보면 그게 더 문제입니다.

```javascript
// ㄴㄴ
foo || doSomething();

// ㅇㅇ
if (!foo) doSomething();
```
```javascript
// ㄴㄴ
void function() { /* IIFE */ }();

// ㅇㅇ
(function() { /* IIFE */ }());
```
```javascript
// ㄴㄴ
const n = ~~3.14;

// ㅇㅇ
const n = Math.floor(3.14);
```

### 코드 재사용

재사용율 높은 함수들 여러가지를 만드는 것을 꺼려하지 마세요.

```javascript
// ㄴㄴ
arr[arr.length - 1];

// ㅇㅇ
const first = arr => arr[0];
const last = arr => first(arr.slice(-1));
last(arr);
```
```javascript
// ㄴㄴ
const product = (a, b) => a * b;
const triple = n => n * 3;

// ㅇㅇ
const product = (a, b) => a * b;
const triple = product.bind(null, 3);
```

### 의존성

의존성을 최소화 하세요. 몇가지 메소드 쓰겠다고 라이브러리 통째로 로드 해오지 마세요.
```javascript
// ㄴㄴ
var _ = require("underscore");
_.compact(["foo", 0]));
_.unique(["foo", "foo"]);
_.union(["foo"], ["bar"], ["foo"]);

// ㅇㅇ
const compact = arr => arr.filter(el => el);
const unique = arr => [...new Set(arr)];
const union = (...arr) => unique([].concat(...arr));

compact(["foo", 0]);
unique(["foo", "foo"]);
union(["foo"], ["bar"], ["foo"]);
```

# this

### 요약
- 객체 레퍼런스를 함께 넘기는 `this`체계는 API 설계를 좀 더 깔끔하고 명확하며 재사용하기 쉽게 한다.
- 사용 패턴이 복잡해질수록 보통 명시적인 인자로 콘텍스트를 넘기는 방법이 `this` 콘텍스트를 사용하는 것보다 코드가 더 지저분해진다.
- `this`는 객체 및 프로토타입과 함께 사용할때 진가를 발휘한다.
- `this`는 호출부에서 함수를 호출할 때 바인딩된다.

## `this`에 대한 오해

### 1. 자기 자신
- `this`가 함수 그 자체를 가리킨다는 오해
  ```javascript
  function foo(num) {
    console.log("foo: " + num);
    this.count++;
  }

  foo.count = 0;
  var i;
  for (i=0; i<10; i++) {
    if (i>5) {
      foo(i);
    }
  }
  
  // foo: 6
  // foo: 7
  // foo: 8
  // foo: 9

  console.log(foo.count); // 0 ....???
  ```
  - `foo`를 함수 자기 자신이라고 생각했을 경우이다.
  - `foo.count = 0;`으로 `foo`라는 함수 객체에 `count`라는 프로퍼티와 함께 값 0을 넣어줬다.
  - 하지만 this는 `foo`를 가르키는게 아니므로 엉뚱한 `count`가 올라가고있다.
  - 결국 `foo.count`는 선언한 그대로가 출력된다.

### 2. 자신의 스코프
- 아주 흔한 오해
- 어떤면에서는 맞지만 잘못 이해한 것
- `this`는 어떤 식으로도 함수의 렉시컬 스코프를 참조하지 않는다.
- 스코프**객체**는 자바스크립트 엔진의 내부 부품이기 때문에 일반 자바스크립트 코드로는 접근하지 못한다.
- 넘지 말아야 할 선을 넘어 `this`가 암시적으로 함수의 렉시컬 스코프를 가리키도록 해보자
  ```javascript
  function foo() {
    var a = 2;
    this.bar();
  }

  function bar() {
    console.log(this.a);
  }

  foo();  // ReferenceError: a is not defined.
  ```
  - `foo`를 통해 `bar`가 호출되면 `bar`의 스코프는 `foo`와 전역스코프이다.
  - `foo` 함수 블록에는 `a`가 선언되어있으므로 `a`는 `bar`의 스코프 안에 있다.
  - `a`가 선언되지 않았다고 나온다!
  - 이유는? `this`는 함수의 스코프를 의미하지 않기 때문!
  - 실제로 `this.a`의 `this`는 `foo`의 `this`에 의해 실행되었고 그 `this`는 전역 객체이므로 `this.a`의 `this`는 호출부인 전역 객체이다.
  - 전역객체의 스코프에는 `a`라는 확인자가 선언되지 않았으므로 ReferenceError를 뱉는다.


<br />

## this의 바인딩

EC(Execution Context)가 생성될 때마다 this의 바인딩이 일어나며 우선순위 순으로 나열해보면 다음과 같다.

1. `new` 를 사용했을 때 해당 객체로 바인딩된다.

```javascript
var name = "global";
function Func() {
  this.name = "Func";
  this.print = function f() { console.log(this.name); };
}
var a = new Func();
a.print(); // Func
```

2. `call`, `apply`, `bind` 와 같은 명시적 바인딩을 사용했을 때 인자로 전달된 객체에 바인딩된다.

```javascript
function func() {
  console.log(this.name);
}

var obj = { name: 'obj name' };
func.call(obj); // obj name
func.apply(obj); // obj name
(func.bind(obj))(); // obj name
```

3. 객체의 메소드로 호출할 경우 해당 객체에 바인딩된다.

```javascript
var obj = {
  name: 'obj name',
  print: function p() { console.log(this.name); }
};
obj.print(); // obj name
```

4. 그 외의 경우

* strict mode: `undefined` 로 초기화된다.
* 일반: 브라우저라면 `window` 객체에 바인딩 된다.

<br>

<br />

## ES6 화살표 함수에서의 `this`

- 일반적인 홤수는 지금까지 살펴본 4가지 규칙을 준수한다.
- **하지만 ES6 이후의 화살표 함수는 이 규칙들을 따르지 않는다.**
  ```javascript
  function foo() {
    // 화살표 함수를 반환한다.
    return a => {
      // 여기서 'this'는 어휘적으로 'foo()'에서 상속된다.
      console.log(this.a);
    };
  }

  var obj1 = {
    a: 2
  };

  var obj2 = {
    a: 3
  };

  var bar = foo.call(obj1);
  bar.call(obj2); // 2 (3이 아니다.)
  ```
- `foo()` 내부에서 생성된 화살표 함수는 `foo()` 호출 당시 `this`를 무조건 어휘적으로 포착한다.
- `foo()`는 `obj1`에 `this`가 바인딩되므로 `bar`의 `this` 역시 `obj1`로 바인딩된다.
- **화살표 함수의 어휘적 바인딩은 절대로 (심지오 new로도!) 오버라이드할 수 없다.**
- **화살표 함수는 이벤트 처리기나 타이머 등의 콜백에 가장 널리 쓰인다.**
  > 화살표 함수는 `this`를 확실히 보장하는 수단으로 `bind()`를 대체할 수 있고 겉보기에도 끌리는 구석이 있지만, 결과적으로 더 잘 알려진 렉시컬 스코프를 쓰겠다고 기존의 `this` 체계를 포기하는 형국이란 점을 간과하면 안된다.

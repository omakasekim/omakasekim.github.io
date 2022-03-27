# 클로저(Closure)

클로저란 **함수가 속한 렉시컬 스코프를 기억하여 함수가 렉시컬 스코프 밖에서 실행될 때도 그 스코프에 접근할 수 있게 하는 기능** 을 말한다.

```javascript
function outer() {
  var a = 2;
  function inner() {
    console.log(a);
  }
  return inner;
}

var func = outer();
func(); // 2
```

여기서 GC(Garbage Collector)가 `outer()` 의 참조를 없앨 것 같지만 내부함수인 `inner()` 가 해당 스코프의 변수인 a를 참조하고 있기 때문에 없애지 않는다. 따라서 스코프 외부에서 `inner()` 가 실행되도 해당 스코프를 기억하기 때문에 2를 출력하게 된다. 즉, 여기서 클로저는 `inner()` 가 되며 `func` 에 담겨 밖에서도 실행되고 렉시컬 스코프를 기억한다.

<br>

## 예제

클로저를 사용하는 대표적인 예제는 역시 "반복문 클로저"이다.

```javascript
function func() {
  for (var i=1; i<5; i++) {
    setTimeout(function() { console.log(i); }, i*500);
  }
}
func(); // 5 5 5 5
```

코드의 의도한 바는 1부터 4까지 간격을 두고 출력하는 것이었지만 5가 4번 출력된다. 왜 이렇게 되는 것일까?  

`setTimeout()` 을 반복문 안에서 돌리면 콜백함수가 계속해서 task queue에 쌓이게 되고 반복문이 끝나고 나서 call stack으로 돌아와서 실행된다. 콜백함수는 클로저이기 때문에 상위 스코프에게 `i` 의 값을 물어보고 상위 스코프인 `func` 의 스코프에선 `i` 가 5까지 증가했기 때문에 5가 4번 출력된다.

<br>

## 해결방법

위 문제를 해결하기 위해선 2가지 방법이 있다.

* **새로운 함수 스코프로 해결하기**

```javascript
function func() {
  for (var i=1; i<5; i++) {
    (function (j) { 
      setTimeout(function() { console.log(j); }, j*500);
    })(i);
  }
}
func(); // 1 2 3 4
```

`setTimeout()` 을 IIFE(Immediately Invoked Function Expression, 즉시실행함수 표현식)로 감싸게 되면, 새로운 스코프를 형성하고 나중에 콜백함수가 `j` 를 참조할 때 그 시점의 `i` 값을 갖기 때문에 원하는 결과를 얻을 수 있게 된다.

* **블록 스코프로 해결하기**

```javascript
function func() {
  for (let i=1; i<5; i++) {
    setTimeout(function() { console.log(i); }, i*500);
  }
}
func(); // 1 2 3 4
```

함수 스코프가 아닌 블록 스코프를 갖는 `let` 을 사용하면 `for` 문 내의 새로운 스코프를 갖기 때문에 매 반복마다 새로운 `i` 가 선언되고 반복이 끝난 이후의 값으로 초기화가 된다. 따라서, `setTimeout()` 의 클로저인 콜백함수가 `i` 를 참조하기 위해 상위 스코프를 검색할 때 블록 스코프에서 매 반복마다 선언 및 초기화 된 `i` 를 참조하는 것이다.

**위의 것을 모두 해결해버리는 위대한 ES6**
  ```javascript
  for (let i=1; i<=5; i++) {
    setTimeout(function timer() {
      console.log(i);
    }, i*1000);
  }
  ```
  > 반복문 시작 부분에서 let으로 선언된 변수는 한 번만 선언되는 것이 아니라 반복할 때마다 선언된다.

## 모듈
- 클로저의 능력을 활용하면서 표면적으로는 콜백과 상관없는 코드 패턴중 가장 강력한 패턴
```javascript
function CoolModule() {
  var something = "cool";
  var another = [1, 2, 3];

  function doSomething() {
    console.log(something);
  }

  function doAnother() {
    console.log(another.join("!"));
  }

  return {
    doSomething: doSomething,
    doAnother: doAnother
  };
}

var foo = CoolModule();

foo.doSomething();  // cool
foo.doAnother();    // 1!2!3
```
- 이 코드와 같은 자바스크립트 패턴을 모듈이라고 부른다.
- 가장 흔한 모듈 패턴 구현 방법은 모듈 노출이고, 앞의 코드는 이것의 변형이다.
- CoolModule()은 그저 하나의 함수이지만, 모듈 인스턴스를 생성하려면 반드시 호출해야 한다.
- CoolModule() 함수는 객체를 반환한다.
- 해당 객체는 내장 함수들에 대한 참조를 가지지만, 내장 데이터 변수에 대한 참조는 가지지 않는다.
- 이 객체의 반환값은 본질적으로 모듈의 공개 API라고 생각할 수 있다.
- 객체의 반환 값은 최종적으로 외부 변수 foo에 대입되고, foo.doSomething()과 같은 방식으로 API의 속성 메서드에 접근할 수 있다.

### 싱글톤을 생성하는 모듈
```javascript
var foo = (function IIFE() {
  var something = "cool";
  var another = [1, 2, 3];

  function doSomething() {
    console.log(something);
  }

  function doAnother() {
    console.log(another.join("!"));
  }

  return {
    doSomething: doSomething,
    doAnother: doAnother
  };
})();

foo.doSomething();
foo.doAnother();
```

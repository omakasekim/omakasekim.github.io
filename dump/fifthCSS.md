# CSS 셀렉터

셀렉터(selector)는 HTML 태그의 모양을 꾸밀 스타일 시트를 선택하는 기능이다. 

```HTML
<style>
  h3{color:brown;}
  </style>
```
셀렉터에는 여러 유형이 있다. 위의 h3처럼 태그 이름이 셀렉터가 되기도 하고, id 속성이나 class 속성의 값을 셀렉터로 사용하기도 하고, 여러 셀렉터를 조합하여 사용하기도 한다.


## 태그 이름 셀렉터

태그 이름 셀렉터는 태그 이름이 셀렉터로 사용되는 경우를 일컫고, 셀렉터와 같은 이름의 모든 태그에 CSS3 스타일 시트를 적용헌다.

```CSS
h3, li { color:brown;}
```
```HTML
<h3>Web Programming</h3>
<ul>
  <li>HTML5</li>
  <li><strong>CSS3</strong></li>
  <li>Javascript</li>
 </ul>
```

## class 셀렉터
셀렉터 이름 앞에 점(.)을 붙인 경우, 이 셀렉터는 HTML 태그의 **class 속성**으로만 지정할 수 있다. 

```CSS
.warning { color:brown;}
```
```HTML
<h3>Web Programming</h3>
<ul>
  <li>HTML5</li>
  <li><strong>CSS3</strong></li>
  <li class="warning">Javascript</li>
 </ul>
```

## id 셀렉터
셀렉터 이름 앞에 해시태그(#)를 붙인 경우, 이 셀렉터는 HTML 태그의 **id 속성**으로만 지정할 수 있다. 

```CSS
#warning { color:brown;}
```
```HTML
<h3>Web Programming</h3>
<ul>
  <li>HTML5</li>
  <li><strong>CSS3</strong></li>
  <li id="warning">Javascript</li>
 </ul>
```


## 셀렉터 조합하기

2개 이상의 
셀렉터를 조합하면 태그를 구체적으로 지정할 수 있다. 셀렉터를 조합하는 방법은 여러가지가 있으나 많이 사용하는 2가지만 알아보자.

### 자식 셀렉터 (child selector)

자식 셀렉터는 부모 자식 관계인 두 셀렉터를 **>** 기호로 조합한 형태이다. 다음은 `<div>` 의 직계 자식인 `<strong>` 태그에 적용할 스타일 시트를 만든 사례이다.

```HTML
div > strong { color:dodgerblue; } /* <div>의 직계 자식인 <strong> 에 적용 */
```

다음은 `<div>`의 자식 `<div>`의 자식인 `<strong>` 태그에 적용할 스타일 시트를 만든 사례이다.

```HTML
div > strong { color:dodgerblue; } /* <div> 의 자식 <div> 의 자식인 <strong> 에 적용 */
```

### 자손 셀렉터 (descendant selector)

자손 셀렉터는 자손 관계인 2개 이상의 **태그**를 **나열**한 형태이다. 다음은 `<ul>` 의 자손인 `<strong>` 태그에 적용하는 스타일 사례이다.

```HTML
div strong { color:dodgerblue; } /* <div>의 자손 <strong> 에 적용 */
```

## 전체 셀렉터

전체 셀렉터(universal selector)란 **와일드카드 문자(₩*)를 사용하여 웹 페이지의 모든 HTML 태그에 적용할 스타일을 만드는 셀렉터이다. 다음은 웹 페이지의 모든 태그의 글자 색을 초록으로 출력한다.

```HTML
* {color:green;}
```

## 속성 셀렉터

HTML 태그의 특정 속성(attribute)에 대해 값이 일치하는 태그에만 스타일을 적용하는 셀렉터이다. 예를 들어 다음 스타일 시트를 보자.

```HTML
input[type=text] {color:red;}
```

이것은 `<input type="text">` 인 모든 태그에 대해 글자색을 빨간색으로 지정하는 속성 셀렉터이다. 


## 가상 클래스 셀렉터

가상 클래스(pseudo-class) 셀렉터는 가상이라는 단어가 의미하듯이 어떤 상황이 발생하였을 때만 적용하도록 만들어진 셀렉터이다. 많이 사용하는 `:visited` 와 `:hover` 에 대해서만 예를 들면 다음과 같다.

```HTML
a:visited {color:green;} /* 방문한 후부터 <a>의 링크 텍스트 색을 초록으로 출력 */
li:hover {background:green;} /* <li> 태그 위에 마우삭 올라가면 초록색을 배경색으로 출력하고, 마우스가 내려가면 원래대로 복귀합니다. */
```

가상 셀렉터를 사용할 때, 콜론(:) 앞뒤에 빈칸을 두면 안된다. 다음은 잘못된 사용이다.
```HTML
li: hover, li :hover, li : hover
```


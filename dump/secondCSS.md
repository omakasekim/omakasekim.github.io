# CSS3 스타일 시트 만들기

CSS3 스타일 시트를 작성하는 방법에는 3가지가 있다.
  * `<style> </style>` 태그에 스타일 시트 작성
  * `style` 속성에 스타일 시트 작성
  * 스타일 시트를 별도로 작성하고, `<link>` 태그나 `@import`로 불러 사용

## `<style>` 태그로 스타일 시트 만들기

`<style>` 은 CSS3 스타일 시트를 담는 태그로서 다음과 같이 사용한다.

```HTML

<head>
  <style>
        body{
            background-color: aliceblue;
        }
        span{
            color: blue;
            font-size: 30px;
        }
  </style>
</head>
```
이 방법은 다음과 같은 특징들이 있다.

  * `<style>` 태그는 반드시 `<head>` 태그 내에서만 작성 가능하다.
  * `<style>` 태그는 여러번 작성 가능하며, 스타일 시트들이 합쳐 적용된다.
  * `<style>` 태그에 작성된 스타일 시트는 웹 페이지 전체에 적용된다.

## `style` 속성에 스타일 시트 만들기

HTML 태그의 style 속성에 CSS3 스타일 시트를 작성 할 수 있는데, 이 경우 해당 태그에만 스타일이 적용된다. 예시 코드는 `<p>` 태그의 글자 크기를 25 px로 바꾸는 사례이다. 
이 스타일은 다른 `<p>` 태그에 적용되지 않는다.

```HTML
<p style = "font-size:25px"></p>
```


## 외부 스타일 시트 불러오기

CSS 스타일 시트만 떼어내서 **.css** 확장자를 가진 파일에 저장해놓고, 필요한 웹 페이지에 불러 사용할 수 있다. 파일에 저장된 CSS3 스타일 시트를 불러오는 방법은 2가지 이다.
  * `<link>` 태그 이용
  * `@import` 태그 이용

<br>

`<link>` 태그 이용은 다음과 같이 `<head>`에서만 사용되며, 종료태그 (`</link>`)가 없다.

```HTML
<head>
  <link href="style.css" type = "text/css" rel="stylesheet">
</head>
```

`<link>` 태그에 대해 좀 더 알아보자.
  * `href="style.css"` 는 **style.css**를 파일로 불러오는 것이다. 만일 CSS3 파일이 서버 상에 있는 경우, 다음과 같이 URL을 기입한다.
  ```HTML
    href="https:///www.site.com/style.css"
  ```
  * `type="text/css"` 는 불러오는 파일이 CSS 언어로 작성된 텍스트 파일임을 알려준다.
  * `rel="stylesheet"`는 불러오는 파일이 스타일 시트임을 알려준다.
  * `<link>` 태그를 여러번 사용하여 여러 CSS 파일들을 불러올 수 있다.


  W3C 표준에서는 CSS 파일의 표준 확장자를 언급하지 않지만 대부분 브라우저는 **.css** 파일을 CSS3 파일로 자동 인식하므로 CSS3 파일 확장자를 **.css**로 작성함이 바람직하다. 
  CSS3 파일에는 `<style>` 태그 없이 스타일 시트를 작성해야한다.
  
  ```CSS
  /*style.css*/
          body{
            background-color: aliceblue;
        }

        span{
            color: blue;
            font-size: 30px;
        }
```

`@import` 문을 이용해서 .css 파일을 웹 페이지에 불러올 수 있다. `@import` 문은 `<style>` 안에서만 사용되며, 여러번 사용할 수 있다.

```HTML
  <style>
    @import url(style.css);
</style>
```




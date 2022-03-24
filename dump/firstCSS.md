# CSS 에 대해 간단히 

CSS(Cascading Style Sheet)는 HTML 문서에 색, 모양, 출력 위치 등 외관을 꾸미는 언어이며, CSS로 작성된 코드를 스타일 시트(style sheet)라고 부른다.

CSS 는 징그러울 정도로 많은 기능들을 가지고 있지만 주로 사용하는 몇가지 기능들을 예로 들어보자면:

  * 색상과 배경
  * 텍스트
  * 폰트
  * 박스 모델 (Box Model)
  * 비주얼 포맷 및 효과
  * 리스트
  * 테이블
  * 사용자 인터페이스

## CSS 작성 예제

- HTML 태그로만 작성한 웹 페이지

```HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

- CSS3 스타일 시트로 꾸민 페이지

```HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            background-color: aliceblue;
        }
        h3{
            color:aqua;
        }
        hr{
            border: 1px solid black;
        }
        span{
            color: blue;
            font-size: 30px;
        }
    </style>
</head>
<body>
    
</body>
</html>

```

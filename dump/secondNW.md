 # 네트워크 전송 GET, POST방식
 
## 1. HTTP 프로토콜 (HyperText Transfer Protocol)
인터넷 상에서 클라이언트와 서버 간에 요청/응답으로 데이터를 주고 받기 위한 프로토콜이다.  

`클라이언트(웹 브라우저)`가 `서버(웹 서버)`로 특정 `웹 페이지`를 요청하면 웹 서버가 해당 페이지의 내용을 `HTML`형식으로 응답한다.  

이 때, HTTP 요청에 포함되는 HTTP 메소드는 요청의 종류를 서버에게 알려주기 위해 사용한다.  HTTP 메소드는 GET, POST, PUT, DELETE, HEAD, OPTIONS, TRACE 등이 있다.  

<br>

## 2. GET
GET은 HTTP/1.1 스펙인 RFC2616의 Section9.3에 따르면 `서버로부터 정보를 조회하기 위해 설계된 메소드`다.

### GET의 특징
* GET은 `요청을 전송할 때 필요한 데이터를 Body에 담지 않고`, `쿼리스트링`을 통해 전송한다.
    - 쿼리스트링은 URL의 끝에 `?`와 함께 이름과 값으로 쌍을 이루는 요청 파라미터를 말하는데, 요청 파라미터가 여러 개이면 `&`로 연결한다. 

* `www.example-url.com/resources?name1=val1&name2=val2`
    - 쿼리스트링을 포함한 URL로, 요청 파라미터명은 name1, name2이고, 각각의 파라미터는 val1, val2라는 값으로 서버에 요청을 보낸다.  
    - 또한, 위와 같이 GET을 사용하는 경우 `데이터가 노출되어 보안에 취약`할 수 있으며, `URL의 길이가 정해져 있어` 많은 양의 정보를 전달할 수 없다.  
  
* GET은 `불필요한 요청을 제한하기 위해 요청이 캐시`될 수 있다.  
    * js, css, 이미지와 같은 정적 컨텐츠는 데이터양이 크고, 변경될 일이 적어서 반복해서 동일한 요청을 보낼 필요가 없다.  
    * 따라서, 정적 컨텐츠를 요청하고 나면 브라우저에서는 요청을 캐시해두고, 동일한 요청이 발생할 때 서버로 요청을 보내지 않고 캐시된 데이터를 사용한다.  
    * 만약 정적 컨텐츠를 변경했을 때, 내용이 바뀌지 않는 경우에는 브라우저의 캐시를 지워줌으로써 이를 해결한다.

<br>

## 3. POST
POST는 GET과 달리 리소스를 생성/변경하기 위해 설계되었기 때문에 `전송해야 될 데이터를 HTTP 메세지의 Body에 담아서 전송`한다.  

### POST의 특징
* POST는 전송해야 할 데이터를 HTTP 메세지의 Body에 담아서 전송한다.  
    - 데이터가 Body로 전송되고 내용이 눈에 보이지 않아 GET보다 보안적인 면에서 안전하다고 생각할 수 있지만, `POST 요청도 크롬 개발자 도구, Fiddler와 같은 툴로 요청 내용을 확인할 수 있다.` 
    - 따라서, 민감한 데이터의 경우에는 `암호화하여 전송`해야 한다.  
  
* POST는 `URL에 데이터를 노출하지 않으므로 즐겨찾기나 캐싱이 불가능`하다.  
  
* HTTP 메세지의 `Body는 길이의 제한없이` 대용량 데이터를 전송할 수 있다.  
  
* POST로 요청을 보낼 때는 `요청 헤더의 Content-Type에 요청 데이터의 타입을 표시`해야 한다.   
    - 데이터 타입을 표시하지 않으면 서버는 내용이나 URL에 포함된 리소스의 확장자명 등으로 데이터 타입을 유추한다.  
    - 알 수 없는 경우에는 application/octet-stream로 요청을 처리한다.  

<br>

## 4. GET과 POST의 차이
* `GET`은 Idempotent(멱등)하도록 설계되었는데 이는 `서버에게 동일한 요청을 여러 번 전송하더라도 동일한 응답이 돌아와야 한다는 것`을 의미한다.  
    - 설계원칙에 따라 서버의 데이터나 상태를 변경시키지 않아야 동일한 응답이 돌아오기 때문에 주로 `조회를 할 때 사용`한다.  
    - 예를 들어, 브라우저에서 웹페이지를 열어보거나 게시글을 읽는 등 조회를 하는 행위는 GET으로 요청한다.  

* `POST`는 Non-idempotent하기 때문에 `서버에게 동일한 요청을 여러 번 전송해도 응답은 항상 다를 수 있다.`  
    - 서버의 상태나 데이터를 변경시킬 때 사용한다.  
    - 예를 들어, 게시글을 쓰면 서버에 게시글이 저장이 되고, 게시글을 삭제하면 해당 데이터가 없어지는 등 POST로 요청을 하게 되면 서버의 무언가는 변경되도록 사용한다.  
    - 생성, 수정, 삭제에 사용할 수 있지만, `생성에는 POST, 수정은 PUT 또는 PATCH, 삭제는 DELETE가 더 용도에 맞는 메소드`라고 할 수 있다.  
  
* 웹페이지를 조회할 때, 링크를 통해 특정 페이지로 이동하려면 해당 링크와 관련된 정보가 필요한데  
    - `POST`는 `요청 데이터가 Body에 담겨 있기 때문에` 링크 정보를 가져올 수 없지만, 
    - `GET`은 `URL에 요청 파라미터를 가지고 있기 때문에` 링크를 걸 때, URL에 파라미터를 사용해 더 자세하게 페이지를 링크할 수 있다.  
  
`� 이처럼 GET과 POST는 차이가 있기 때문에 설계원칙에 따라 적절한 용도로 사용할 것! `

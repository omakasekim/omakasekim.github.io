# HTTP

클라이언트-서버 모델을 따르는 프로토콜로 TCP/IP 위에서 동작하며 well-known 포트인 80번 포트를 사용하여 통신한다. 첫번째 표준은 HTTP/1.1이며 이후로 HTTP/2 및 HTTP/3가 등장하였다. 여기선 HTTP/1.1의 내용을 정리한다.

## 특징

### 비-연결 지향 (Connectionless)

클라이언트가 서버에게 리소스를 요청한 후 응답을 받으면 연결을 끊어버리는 특징이다. 연결을 유지하게 되면 서버에 많은 부담을 줄 수 있기 때문에 상당히 많은 클라이언트에게 요청을 받는 웹 서버의 경우 응답을 처리했으면 연결을 끊는다. 이로 인해 서버의 부담을 줄일 수 있지만, 리소스를 요청할 때마다 연결해야 하는 오버헤드 비용이 발생한다. 이를 해결하기 위해선, 요청 헤더의 `Connection: keep-alive` 속성으로 지속적 연결 상태(Persistent connection)를 유지할 수 있다. 즉, 요청을 할 때마다 연결하지 않고 기존의 연결을 재사용하는 방식이다. HTTP 1.1 부턴 지속적 연결 상태가 기본이며 이를 해제하기 위해선 명시적으로 요청 헤더를 수정해야 한다.

### 무상태성 (Stateless)

각각의 요청이 독립적으로 여겨지는 특징으로, 서버는 클라이언트의 상태를 유지하지 않는다. 즉, 각 클라이언트에 맞게 리소스를 응답하는 것은 불가능하다. 이를 해결하기 위해, 쿠키나 세션 또는 토큰 방식의 OAuth 및 JWT가 사용된다.

<br>

## Method

클라이언트가 서버에 요청방법을 정의하는 것으로 주어진 리소스에 수행하길 원하는 행동을 나타낸다.

* **GET** : 서버에게 조회할 리소스를 요청한다. (READ, 조회)
* **POST** : 서버에게 <u>본문(body)에 생성할 데이터를 삽입</u>하여 전송한다. (CREATE, 생성)
* **PUT** : 서버에게 <u>본문에 수정할 데이터를 삽입</u>하여 전송한다. (UPDATE, 수정)
* **DELETE** : 서버에게 삭제할 리소스를 요청한다. (DELETE, 삭제)
* **PATCH** : PUT과 비슷하지만 일부만 수정한다는 점에서 다르다.

<br>

## 응답 상태코드

서버가 클라이언트에게 요청을 받으면 응답상태에 따라서 다른 상태코드를 클라이언트에게 돌려준다.

* **1xx (요청에 대한 정보)** : 요청을 받았으면 작업을 계속한다.
* **2xx (성공)** : 요청을 성공적으로 수행했다.
  * 200(성공), 201(새 리소스 작성), 202(요청 접수, 아직 처리는 안함)
* **3xx (리다이렉션)** : 클라이언트가 요청을 마지기 위해 추가적인 동작을 취해야 한다.
  * 300(여러개의 응답, 선택해야 함), 301(영구이동, 요청한 페이지가 영구적으로 이동됨), 302(임시이동, 현재 응답잉 다른 페이지이긴 하지만 임시적임)
* **4xx (클라이언트 오류)** : 클라이언트에 오류가 있다.
  * 401(권한 없음), 403(금지됨, 리소스에 대한 권한 없음), 404(찾을 수 없음, 서버에 없는 페이지)
* **5xx (서버 오류)** : 서버에 오류가 있다.
  * 500(내부 서버오류), 501(요청수행 기능없음, 메서드 인식불가), 503(서비스 사용불가)

<br>

## 헤더

요청/응답 헤더 및 본문 헤더 등 다양한 속성들이 있지만 여기선 주요한 속성들만 명시한다.

### 요청 헤더

* Host : 서버의 도메인 이름과 TCP 포트번호 (표준 포트는 생략 가능)

  * ```
    Host: en.wikipedia.org:8080
    ```

* Content-Type : POST/PUT 메서드를 사용할 때 본문의 타입

  * ```
    Content-Type: application/x-www-form-urlencoded
    ```

* If-Modified-Since : 명시한 날짜 이후로 변경된 리소스만 획득

  * ```
    If-Modified-Since: Sat, 29 Oct 1994 19:43:31 GMT
    ```

* Origin : 요청이 어느 도메인에서 왔는지 명시, 서버의 `Access-Control-*` 속성에 필요

  * ```
    Origin: http://www.example-social-network.com
    ```

* Cookie : 서버의 `Set-Cookie` 로 설정된 쿠키 값

  * ```
    Cookie: $Version=1; Skin=new;
    ```

### 응답 헤더

* Access-Control-* : CORS를 허용하기 위한 웹사이트 명시

  * ```
    Access-Control-Allow-Origin: *
    ```

* Set-Cookie : 클라이언트에 쿠키 설정

  * ```
    Set-Cookie: UserID=JohnDoe; Max-Age=3600; Version=1
    ```

* Last-Modified : 요청한 리소스가 마지막으로 변경된 시각

  * ```
    Last-Modified: Tue, 15 Nov 1994 12:45:26 GMT
    ```

* Location : 3xx 상태 코드일 때, 리다이렉션 되는 주소

  * ```
    Location: http://www.w3.org/pub/WWW/People.html
    ```

* Allow : 요청한 리소스에 대해 가능한 메서드들

  * ```
    Allow: GET, HEAD
    ```

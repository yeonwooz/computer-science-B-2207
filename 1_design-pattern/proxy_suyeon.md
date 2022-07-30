## 프록시 패턴

> 프록시 : "가로채는 객체"
> 대상 객체에 접근하기 전에 접근의 흐름을 가로채고, 대상 객체보다 앞서서 동작하는 인터페이스

> 보안, 데이터 검증, 캐싱, 로깅에 사용된다.

### 프록시 서버

서버와 클라이언트 사이에서 프록시 역할을 하는 프로그램.

### SOP & CORS

> SOP : same origin policy
> CORS : cross origin resource sharing

SOP 정책은 따라 출처(Origin)가 다른 리소스 로드를 막는 메커니즘이다.

Origin 판단 기준 : Protocol (Https://), Host(www. ...), Port(:8080)

그런데 실제 서비스에서는 다른 출처의 리소스도 받을 수 있어야 하므로 CORS를 활용한다.

CORS 는 추가 HTTP 헤더를 사용하여 현재의 Origin에서 실행 중인 웹 애플리케이션이 다른 Origin의 선택한 자원에 접근할 수 있는 권한을 부여하도록 브라우저에 알려주는 체제이다.

### 접근 제어 시나리오 ( API요청시 브라우저는 다음과 같은 단계로 서버에 요청을 보낸다.)

#### Preflight Request

```
// REQ:
OPTION /doc HTTP/1.1
Origin: http://foo.example
Access-Control-Request-Method: POST
Access-Control-Request-Headers: X-PINGOTHER, Content-Type

// RES (허가되었는지 응답)
Access-Control-Allow-Origin: http:foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
```

서버에서 받은 Access-Control-Allow-Origin 가 없다면 브라우저에서 에러 발생
문제는, 만약 서버가 단순히 CORS에 대해 인지하지 못한 상황이라면 서버에서는 정상적으로 요청을 처리했기 때문에, 만약 Patch 혹은 Delete 메서드를 수행했다면 데이터 수정이 반영되었으나 유저에게는 에러로 안내된 상황이 초래됨.

많은 브라우저에서 preflight req 단계가 simple req 보다 먼저 수행되는 이유이다.

#### Simple Request

```
// REQ
method : GET / HEAD / POST

header: Accept / Accept-Language / Content-Language / Content-Type

Content-Type:
A. application/x-www-form-unlencoded
B. multipart/form-data
C. text/plain
```

#### Credentialed Request

HTTP cookies 와 HTTP Authentication 정보를 인식하여, withCredentials 값을 bool 타입으로 저장함
서버에서는 응답시 Access-Control-Allow-Credentials 값을 보내주고, 브라우저는 이 헤더가 없는 (혹은 값이 false인) 컨텐츠를 보여주지 않는다.

### 프록시 서버를 두는 이유

서버 입장에서 모든 출처(\*)를 허용하는 것은 위험하다.
또한 모든 출처를 일일이 등록하는 것보다는 프록시 서버를 경유하도록 하는 것이 편리할 것이다.

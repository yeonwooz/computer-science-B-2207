# Chapter 1 디자인 패턴과 프로그래밍 패러다임
 
## 디자인 패턴 Design Pattern

### 1.1.5 프록시 패턴과 프록시 서버
#### 프록시 패턴 Proxy Pattern
- 대상 객체 subject에 접근하는 흐름을 가로채는 방식으로, 객체 앞단이 인터페이스 역할을 하는 패턴
- 객체의 속성, 변환등을 보완해 보안, 데이터 검증, 캐싱, 로깅에 사용

##### `프록시 서버의 캐싱` :
	캐시 안에 정보를 담아두고 해당 정보에 대한 요청이 왔을 때 원격 서버에 요청하는 대신 캐시 안의 데이터를 활용하는 방식으로 불필요한 트래픽을 줄일 수 있음

#### 프록시 서버 Proxy Server
- 클라이언트가 다른 네트워크 서버에 간접적으로 접속할 수 있게 하는 시스템이나 어플리케이션
- 장점
    - 보안 강화: 익명 사용자가 직접 서버로 접근하는 것을 막을 수 있음
    - CORS 문제 해결: 
- 예시: Nginx (비동기 이벤트 기반의 구조와 다수의 연결을 효과적으로 처리 가능한 웹서버), CloudFlare (DDOS 공격 방어, HTTPS 구축)

##### `CORS (Cross-Origin Resource Sharing) 교차 출처 리소스 공유` :
	서버가 웹 브라우저에서 리소스를 로드할 때 다른 오리진 (출처) 을 통해 로드하지 못하게 하는 HTTP 헤더 기반 매커니즘
##### `Origin 출처` :
	프로토콜과 호스트 이름, 포트의 조합

***


#### ref

https://tecoble.techcourse.co.kr/post/2020-11-07-singleton/
https://www.quora.com/What-is-singleton-design-pattern-1
https://readystory.tistory.com/114
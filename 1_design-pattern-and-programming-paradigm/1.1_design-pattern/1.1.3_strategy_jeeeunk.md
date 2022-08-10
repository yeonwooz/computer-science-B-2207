# Chapter 1 디자인 패턴과 프로그래밍 패러다임 

## 디자인 패턴 Design Pattern

### 1.1.3 전략 패턴 Strategy Pattern (정책 패턴 Policy Pattern)
#### 개념
- 객체의 행위 바꾸는 경우 캡슐화한 알고리즘 (전략)을 컨텍스트 안에서 바꿔 상호 교체가 가능하게 만드는 패턴
- 여러가지 행위를 인터페이스를 구현해 클래스로 만들어 이 행위를 주체가 사용할 수 있도록 함
- 전략: 네이버 페이, 카카오 페이 등 다양한 결제 방법
- 예시: `passport.js`: Node.js에서 인증 모듈을 구현할 때 사용하는 미들웨어 라이브러리로, 여러가지 전략(LocalStrategy, OAuth) 로 인증할 수 있게 함


##### `컨텍스트`: 
	개발자가 작업을 완료하는데 필요한 모든 관련 정보

#### ref
https://victorydntmd.tistory.com/292

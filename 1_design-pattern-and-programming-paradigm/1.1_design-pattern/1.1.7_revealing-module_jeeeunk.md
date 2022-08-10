### 1.1.7 노출 모듈 패턴 Revealing Module Pattern
#### 개념
- 즉시 실행 함수를 통해 private, public 같은 접근 제어자를 만드는 패턴
- js는 접근 제어자가 없어 노출 모듈 패턴을 통해 접근 제어자를 구현하기도 함
- 해당 패턴을 기반으로 한 js 모듈 방식으로 CJS가 있음 

``` javascript
const pukuba = (() => {
	// a, b -> 다른 모듈에서 사용할 수 없음, private 범위
	const a = 1;
	const b = () => 2;

	// c, d -> 다른 모듈에서 사용 가능, public 범위
	const public = {
		c : 2,
		d : () => 3
	};
	return public;

})();

console.log(pukuba); // {c : 2, d: [Function: d]}
console.log(pukuba.a); // undefined
```

##### `public` :
	클래스에 정의된 함수, 자식 클래스, 외부 클래스에서 접근

##### `protected` :
	클래스에 정의된 함수, 자식 클래스에서 접근 가능하지만 외부 클래스에서 접근 불가

##### `private` :
	클래스에 정의된 함수에서 접근 가능하지만 자식 클래스와 외부 클래스에서 접근 불가

##### `즉시 실행 함수` :
	정의하자마자 바로 호출하는 함수
	초기화 코드, 라이브러리 내 전역 변수의 충돌 방지 등에 사용

##### `CJS, Common JS` :
	자바스크립트 모듈 방식 중 하나로, 동기적 방식 사용




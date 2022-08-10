### 1.1.6 이터레이터 패턴 Iterator pattern
#### 개념
- 이터레이터 iterator를 사용, 컬렉션 collection의 요소들에 접근하는 디자인 패턴
- 순회 가능한 자료형의 구조와는 상관 없이, 이터레이터라는 하나의 인터페이스로 순회 가능

#### 장점
- 어떤 식으로 일이 처리되는지 몰라도 그 안에 들어있는 항목들에 대해서 반복작업을 수행 할 수 있다
- 모든 항목에 일일이 접근하는 작업을 컬렉션 객체가 아닌 이터레이터 객체에서 맡아 인터페이스 및 구현이 간단해짐

#### 단점
- 단순한 순회를 구현하는 경우 클래스만 많아져 복잡도가 증가할 수 있다.

``` javascript
const mp = new Map();
mp.set('a', 1); mp.set('b', 2); mp.set('c', 3);

const st = new Set();
st.add(1); st.add(2); st.add(3);

for (let a of mp) console.log(a); // iterator 프로토콜 'for a of b'
for (let a of st) console.log(a);

```

##### `컬렉션 Collection` :
	목록성 데이터를 처리하는 자료구조

##### `이터레이터 Iterator` :
	이터러블한 객체들을 순회할 때 쓰이는 규칙

##### `이터러블 Iterable 한 객체` :
	반봅 가능한 객체로 배열을 일반화한 객체
	



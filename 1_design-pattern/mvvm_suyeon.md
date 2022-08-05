## MVVM 패턴

> **비즈니스 로직과 프레젠테이션 로직을 유저 인터페이스에서 분리하기 위해서 고안된 방법** <br/> **MVP패턴을 개선**

### View

UI로직만 가지고 있다. ViewModel의 상태변화를 옵저빙한다.

### ViewModel

ViewModel에서는 View의 메서드와 필드를 정의한다.
MVP 패턴의 Presenter의 역할처럼 View 와 Model 사이 어댑터 역할을 한다. 다만 View와 ViewModel의 관계는 항상 1:1인 것은 아니고 View가 1개 이상의 ViewModel의 데이터를 옵저빙한다.
업데이트된 여러 Model의 데이터 중에서, 현재 ViewModel과 연결된 View에서 옵저빙하고 있는 데이터만 선택하여 가공하여 View에서 그대로 가져다 쓸 수 있도록 한다.

### 장점

Model과 ViewModel이 View로부터 독립적이다.
테스트와 모듈화가 용이하다.

### 단점

앱의 규모가 크지 않은 경우에는 오히려 오버헤드가 커질 수 있다고 한다.

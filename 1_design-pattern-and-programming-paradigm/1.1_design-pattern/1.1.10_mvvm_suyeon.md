## MVVM 패턴

> **비즈니스 로직과 프레젠테이션 로직을 유저 인터페이스에서 분리하기 위해서 고안된 방법** <br/> **MVP패턴을 개선**

### View

UI로직만 가지고 있다. ViewModel의 상태변화를 옵저빙한다.

### ViewModel

ViewModel에서는 View의 메서드와 필드를 정의한다.
MVP 패턴의 Presenter의 역할처럼 View 와 Model 사이 어댑터 역할을 한다. 다만 View와 ViewModel의 관계는 항상 1:1인 것은 아니고 View가 1개 이상의 ViewModel의 데이터를 옵저빙한다.
업데이트된 여러 Model의 데이터 중에서, 현재 ViewModel과 연결된 View에서 옵저빙하고 있는 데이터만 선택하여 가공하여 View에서 그대로 가져다 쓸 수 있도록 한다.

[<img src="https://velog.velcdn.com/images%2Fk7120792%2Fpost%2F435f3582-4ebb-464d-a2c4-5d828d4fc63c%2F%E1%84%87%E1%85%B2%20%E1%84%86%E1%85%A9%E1%84%83%E1%85%A6%E1%86%AF%20%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%20%E1%84%8B%E1%85%A8%E1%84%89%E1%85%B5.png" width="400"/>](https://velog.velcdn.com/images%2Fk7120792%2Fpost%2F435f3582-4ebb-464d-a2c4-5d828d4fc63c%2F%E1%84%87%E1%85%B2%20%E1%84%86%E1%85%A9%E1%84%83%E1%85%A6%E1%86%AF%20%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%20%E1%84%8B%E1%85%A8%E1%84%89%E1%85%B5.png)<br/>
[출처](https://velog.io/@k7120792/Model-View-ViewModel-Pattern)

### 장점

Model과 ViewModel이 View로부터 독립적이다.
테스트와 모듈화가 용이하다.

### 단점

앱의 규모가 크지 않은 경우에는 오히려 오버헤드가 커질 수 있다고 한다.

---

## MVP 프레젠터, MVVM 뷰모델 차이

- **Presenter는 View와 1대1 관계를 맺고 View 를 참조한다.**<br/>
  ( Presenter의 생성자 패러미터로 View를 전달)<br/>
  Presenter가 View의 인터페이스 메서드를 사용하기 떄문에, 해당 View 에 그 메서드가 없으면 Presenter까지 영향을 받는다.

- **View Model은 특정 View랑 연결되지 않는다. View 에서 View Model을 옵저브하는 것이다**<br/>
  (View Model은 자신의 함수가 어떤 View에서 사용되는지 모르고, 특정 View의 함수도 직접 참조하지 않는다)<br/>
  특정 View에서 정의해둔 함수를 주석처리해도 View Model 들에는 영향이 없다.
  <br/>예를 들어, 메인화면을 보여주는 MainView와 그 뷰에서 사용하는 뷰모델 중 View Model이 있다고 하면,
  View에서 ViewModel을 Observe하거나
  아니면 이 둘과 같은 레벨에 MainActivity 를 하나 더 두고 여기 에서 ViewModel을 Observe 시켜서 Model의 데이터를 받아온다.
  <br/>각각의 View Model 은 여러 Model에서 받아온 데이터들을 기능에 맞게 가공을 해두는 역할을 하고, View은 View Model 의을 Observe해서 받아온 데이터를 바로 쓸 수 있는 것이 가장 이상적이다.

참고 : https://handnew04.github.io/posts/2020-11-24/

## MVC 패턴

> **비즈니스 로직과 유저 인터페이스를 분리하기 위해서 고안된 방법**

### View

유저 인터페이스 요소.(ex. form view) <br/>
화면 구성정보 이외에 사용자별로 다르게 보이는 데이터를 뷰에 저장해서는 안된다.<br/>
유저는 View를 보며 액션을 발생시키지만 유저액션은 Controller로 바로 전달된다.

### Controller

유저 액션의 결과로 모델의 데이터를 갱신하고, 어떤 뷰를 보여줄지 결정한다.<br/>
뷰와 모델에 의존적이어도 된다(뷰와 모델을 import할 수 있다는 뜻). 다만 커플링이 높아질 수록 MVP 패턴으로 변경할 필요성이 생긴다.
<br/>

### Model

데이터 정보를 가지고 있다.
유저액션이 발생하면 Controller를 통해 Model의 데이터가 갱신된다.

[<img src="https://rangleio.ghost.io/content/images/size/w1000/2021/04/mvc_blog_diagrams_MVC_pattern1.png" width="400"/>](https://rangleio.ghost.io/content/images/size/w1000/2021/04/mvc_blog_diagrams_MVC_pattern1.png)<br/>
([출처](https://rangle.io/blog/how-react-and-redux-brought-back-mvc-and-everyone-loved-it/))

#### Q.React 는 MVC패턴으로 설계되었을까?

> **결론 : 리액트 프레임워크는 MVC패턴을 지향하도록 설계되었다.**

- state(Model) / render method(View) / logics (controller) 세가지 파트로 나누어서 구현할 수 있다는 점에서 맥락이 비슷
- 페이스북은 리액트를 만들면서 'MVC는 큰 시스템에 어울리지 않는다'며 FLUX 패턴을 MVC의 대안으로 제시했다.
- 페이스북이 제시한 MVC의 문제점은 '데이터의 흐름이 양방향적'이라는 점이 있는데 이는 논쟁의 여지가 있다. 왜냐하면 MVC패턴에서도 데이터의 일방향 흐름을 지향한다고 하기 때문이다.(유저액션 -> Controller -> Model -> View) 페이스북이 지적한 'View가 Model을 역으로 직접 변경하는' 일은 MVC패턴에서 권장하지 않는 설계방식을 사용했기 때문에 발생했다는 것.
- Flux의 Dispatcher를 Reducer로 개선 및 변경한 Redux 라이브러리가 만들어졌다.
- Flux 의 Dispatcher는 MVC패턴의 컨트롤러와 비슷한 역할을 한다. 모든 액션을 받아 모든 Store에 넘기는 역할. 모든 액션이 모든 Store로 넘어가고, 필터링은 Store에서 처리하고 필요한 객체에 대해 업데이트한다.
- Redux 라이브러리의 Reducer 는 액션을 받아서 필요한 상태객체 업데이트를 처리한 후에, Store에 업데이트된 상태객체들을 취합하여 보낸다.
- Redux 라이브러리에서는 Flux와 달리 Store를 전체 서비스에 단 하나만 둘 수 있다.

---

### 리액트에서 불변성을 지켜야 하는 이유 : state감지를 얕은 비교(주소비교)로 하기때문

프로그래밍에서 불면성이란 원본 메모리영역의 값을 바꾸지 않는 것이다

자바스크립트의 원시타입은 항상 새로운 메모리에 만들어지는 불변성이 있지만 참조타입은 아니다.

(원시타입 변수는 value가 변경될 때마다 콜스택에 새로운 메모리 영역을 생성하지만 참조타입 변수는 Value는 힙에 저장되고, 콜스택에 저장되는 value값에는 힙의 주소가 저장되기 때문에 변수 값이 바뀌면 힙의 값만 바뀌고 콜스택에 저장된 value는 여전히 같은 메모리를 바라본다)

참조타입의 불변성은 의도적으로 만들어주어야 한다. 전개연산자나 배열의 map, filter, slice, reduce등의 메서드들을 활용해 새로운 메모리 영역에 값을 할당시킬 수 있다.

리액트의 state 변화 감지 기준은 콜스택의 주소값이다. (얕은비교) 원시타입은 값이 변경되면 콜스택의 주소값 변화가 항상 감지되지만, 참조타입은 값이 변경되어도 콜스택 주소가 바뀌지 않아 state변경이 감지되지 않는다.
리액트에서 불변성을 유지해야 하는 이유이다.

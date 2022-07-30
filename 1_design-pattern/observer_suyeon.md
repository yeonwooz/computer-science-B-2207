## 옵저버 패턴

> 주체가 객체의 상태변화를 주시하다가, 변화가 있을 때 observer 에게 알려주는 패턴

> 이벤트 기반 시스템에 사용하기 적합

> MVC 구조의 프로젝트에서, Model에 변경이 생기면 View 옵저버에게 알려주고 Controller 가 동작한다.

---

### 옵저버 패턴 활용방식

1. Subject 인스턴스를 만든다.
2. Observer 인스턴스를 만들면서, 주시할 Subject를 전달한다.
   Observer 는 update메서드를 가지고 있다.
3. Subject에 옵저버를 등록해둔다.
4. Subject의 데이터 업데이트 메서드에서 등록된 옵저버의 update 메서드를 호출하도록 한다.
5. Observer 의 update 메서드가 호출된다. Observer는 Subject의 변경된 데이터를 참조할 수 있다.

```
interface Subject  // 인터페이스 구현시에는 상위클래스의 메서드를 반드시 재정의해야 함
{
...
}

interface Observer
{
...
}

class Gamer implement Subject
{
    private List<Observer> observers;

    public Manager()
    {
        this.observers = new ArrayList<>();
    }

    ...
    public void notifyObservers()
    {
        this.observers.forEach(Observer::update);
    }

    @override
    public Object getUpdate(Observer obj)
    {
        return this.message;
    }

    public void upgradeLevel(int level)
    {
        this.level = level;
        notifyObservers();
    }

}

class Manager implement Observer
{
    ...

    private Subject gamer;
    public Manager(Subject gamer)
    {
        this.gamer = gamer;
    }

    @override
    public void update()
    {
        string msg = (String) gamer.getUpdate(this);
        System.out.println(msg);
    }
}

...
```

### 자바스크립트의 프록시 객체 활용

> Proxy : 가로채는 객체

1. Subject 객체를 만든다.
2. Observer 역할을 할 프록시 객체를 만들면서, 주시할 Subject를 target으로 전달한다. (첫번째 인자)
3. 프록시는 두번째 인자인 핸들러에서 타겟 객체에 접근(get)하거나 객체를 수정(set)하는 메서드 등 미리 정의된 작업들을 가로챌 수 있다.
4. Subject는 Observer의 존재를 몰라도 된다. target으로 전달되는 수동적인 역할이다.
5. Subject의 데이터를 업데이트한다.
6. Observer 인 프록시의 핸들러가 호출된다. 프록시는 타겟의 변경된 데이터를 참조할 수 있다.

```
function subscribe(tg, callback) {
  const handler = {
    // set 메서드를 프로퍼티로 등록
    set(obj, prop, value) {
      if (value != obj[prop]) {
        const prev = obj[prop];
        obj[prop] = value;
        callback();
        console.log(`${prop} has changed from ${prev} to ${value}`);
        if (value > prev) console.log("congratulations!");
        else console.log("You sould try hard.");
        return true;
        // 값을 쓰는 게 성공적으로 처리되었으면 [[Set]]은 반드시 true를 반환해야 한다. 그렇지 않은 경우는 false를 반환해야 한다.
      }

      return false;
    },
  };
  const proxy = new Proxy(tg, handler);
  return proxy;
}

const gamer = {
  level: 1,
};

function notify() {
  console.log("From Manager : ");
}

const manager = subscribe(gamer, notify);
manager.level = 1;
manager.level = 2;          /* From Manager :
                               level has changed from 1 to 2
                               congratulations! */
manager.level = 2;
manager.level = 1;          /* From Manager :
                               level has changed from 2 to 1
                               You sould try hard. */
```

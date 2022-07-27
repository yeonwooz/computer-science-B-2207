## 팩토리 패턴

> 객체 생성부분을 추상 레이어로 랩핑한 패턴

> (클래스기반 언어에서) 상속관계에 있는 두 클래스에서 상위클래스가 기본 뼈대가 되는 abstract 메소드를 결정하고, 상속받은 하위클래스에서 구체적인 내용을 결정하는(오버라이드하는) 패턴

#### **예시1. 객체 생성부분을 추상 레이어로 랩핑**

#### 1-1. new object()

인자를 넘겨주면 JS엔진이 인자의 타입을 감지하고 이에 따라 생성할 인스턴스의 타입을 결정하여 생성

```
const num = new Object(100)
num.name // undefined
num.constructor.name // 'Number'
num + 1 = 101

const str = new Object('abc')
str.name // undefined
str.constructor.name // 'String'
str + 1 = 'abc1'
```

#### 1-2. factory class

```
const EMENU = {
    LATTE : 'LatteFactory',
    ESPRESSO : 'EspressoFactory',
}

...
class CoffeFactory
{
    static createCoffee(type)
    {
        const factory = factoryList[type]    // 어떤 타입의 인스턴스를 생성할지 결정
        return factory.createCoffee()
    }
}

class LatteFactory
{
    static createCoffee()
    {
        return new Latte()  // 인스턴스 생성
    }
}

class Latte
{
    constructor()
    {
        this.name = "latte"
    }
}

...

const factoryList = { LatteFactory, EspressoFactory, ... }

const main = () => {
    console.log(CoffeeFactory.createCoffee(EMENU.LATTE).name)    // latte
}

main()
```

#### **예시2. 상위 클래스를 상속받은 하위 클래스에서 추상메서드를 구체적으로 오버라이드**

```
// Java
abstract class Coffee
{
    publicabstract int getPrice();

    @override
    public String toString()
    {
        return "Hi this coffee is " + this.getPrice();
    }
}

class CoffeeFactory
{
    public static Coffee getCoffee(String type, int price)
    {
        if ("Latte".equalsIgnoreCase(type)) return new Latte(price);
        ...
    }
}
// TODO: ENUM 사용하는 게 더 좋다. 자바 코드를 작성해보지 않아서 enum 어떻게 사용하는지 잘 모르겠음

Class Latte extends Coffe
{
    private int price;

    public Latte(int price)
    {
        this.price = price;
    }    // 생성자

    @override
    public int getPrice()
    {
        return this.price;
    }
}
...

public class Print
{
    public static void main(String[] args)
    {
        Coffee latte = CoffeFactory.getCoffee("Latte", 4000);
        System.out.println("Latte Factory :: " + latte)    // Coffee 클래스의 toString메서드 실행됨
    }
}
```

### **장점**

공장 생산라인의 공정 파트처럼, 각각의 클래스가 명확하게 분리된 역할을 갖고 서로 느슨하게 결합되어 리팩토링이 쉽다.

### **단점**

복잡해질 수 있다?

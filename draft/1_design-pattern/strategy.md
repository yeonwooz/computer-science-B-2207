## 전략 패턴 (정책 패턴)

> 객체의 행위를 캡슐화
> 행위가 객체에 종속된 것이 아닌, 전략 매개변수에 종속됨

### **장점**
인스턴스를 만드는 시점에 그 인스턴스의 행위를 고정시키는 것이 아니라, 추후 인스턴스의 행위를 교체할 수 있다. 

(교체할 수 있는 행위의 종류가 많을 수록 이점이 많을 것 같다)


### **단점**
비즈니스 모델에 따라서 객체의 행위가 오랫동안 고정되어도 되는 경우에는 이 패턴이 비효율적이다. 

(행위의 목록이 너무 많아진다면 모든 행위를 추상화하는 데 리소스를 많이 들이게 될 것 같다.) 


```
class CommuteStrategy 
{
    public void go(int budget, int fare);
}

class BusStrategy implements Language 
{
    private int BusNumber;
    
    public BusStrategy(int duration, int busNumber)
    {
        this.BusNumber = busNumber;
    }
    
    @override
    public void go(int budget)
    {
        if (budget >= 10)
        {
            System.out.println("spends " + fare + "dollars");
            System.out.println("Let's go");
        }
        else 
        {
            System.out.println("out of budget");
        }
    }
}

class TaxiStrategy implements Language 
{
    private int Platform;
    
    public BusStrategy(String platform)
    {
        this.Platform = platform;
    }
    
    @override
    public void go(int budget)
    {
        if (budget >= 20)
        {
            System.out.println("spends " + fare + "dollars");
            System.out.println("Let's go");
        }
        else 
        {
            System.out.println("out of budget");
        }
    }
}

class BikeStrategy implements Language 
{
    private int Owner;
    
    public BusStrategy(String owner)
    {
        this.Owner = owner;
    }
    
    @override
    public void go(int budget)
    {
        System.out.println("Let's go");
    }
}

...

class Routine 
{
    private int Budget;
    
    public Routine(int budget) 
    {
        this.Budget = budget;
    }
    
    public void choose_transportation(CommuteStrategy transportation)
    {
        transportation.go(budget);
    }
}

public class Commute 
{
    public static void main(String[] args)
    {
        Routine routine = new Routine();
        
        routine.pay(new TaxiStrategy(5))    // out of budget
        routine.pay(new BusStrategy(5))    // out of budget
        routine.pay(new BikeStrategy(5))    // Let's go
    }
}

```






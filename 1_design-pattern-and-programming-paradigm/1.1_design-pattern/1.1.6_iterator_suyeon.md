## 이터레이터 패턴

> **이터레이터를 사용하여 요소들에 접근하는 패턴**<br/> **JS의 경우 String, Array, TypedArray, Map, Set 등이 있다**

**Symbol.iterator**

```
let s = "123";
let num = 123;
let obj2 ={
    prop1: s[Symbol.iterator],  // ƒ [Symbol.iterator]()
    prop1: num[Symbol.iterator] // undefined
}
```

Symbol.iterator 속성이 있다는 것은 iterable하다는 것이고,
이터러블 객체는 for of 루프를 사용할 수 있고 spread연산자나 구조 분해할당이 가능하다

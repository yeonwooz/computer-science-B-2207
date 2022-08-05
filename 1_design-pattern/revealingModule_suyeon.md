## 노출모듈 패턴

> **외부에서 접근할 수 있는 public과 접근할 수 없는 private 객체를 구분하는 패턴.** <br/> **자바스크립트는 접근제어자가 없으므로 즉시실행함수를 통해 지역스코프 안에서만 살아있는 객체를 만들어줌으로써 private 접근제어자의 역할을 대신할 수 있다.**

```
// IIFE
(function openSecretRoom(name, password) {
  console.log("executed");
  const privateId = 101;
  const resolve = () => "OPEN";
  const reject = () => "LOCKED";
  const privateOwner = {
    name: "Tom",
    password: "shark",
    roomId: privateId,
  };
  const publicMethod = (name, password) => {
    if (name === privateOwner.name && password === privateOwner.password) {
      console.log(resolve());
      return resolve();
    }
    console.log(reject());
    return reject();
  };
  return publicMethod();
})();

openSecretRoom() // ReferenceError: openSecretRoom is not defined

=> private 객체에 접근할 수 없다.
=> name, password 에 인자를 전달할 수도 없다.
```

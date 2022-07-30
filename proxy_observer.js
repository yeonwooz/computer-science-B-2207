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
manager.level = 2;
manager.level = 2;
manager.level = 1;

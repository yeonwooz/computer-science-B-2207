const handler = {
  get: function (target, prop) {
    return prop === "name" ? `${target.a} ${target.b}` : target[prop];
  },
};

let p = { a: "yellow", b: "green", prop1: "str_prop1" };
p = new Proxy(p, handler);

console.log(p.a);
console.log(p.b);
console.log(p.prop1);
console.log(p.name);
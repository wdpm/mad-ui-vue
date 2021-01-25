function isType(value, type) {
  return typeof value === type
}

function foo() {}

const bar = () => {}

console.log(isType(123, 'number'))
console.log(isType('123', 'string'))
console.log(isType(foo, 'function'))
console.log(isType(bar, 'function'))

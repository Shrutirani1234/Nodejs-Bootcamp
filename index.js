const{doSomething,againSomething,create,read,update,deletefun} = require('./newmode.js')

const otherfunction = require('./newmode.js')
console.log("js test using node")

console.log(create(1));
console.log(create(10));
console.log(read());
console.log(update(0,100));
console.log(deletefun(1));
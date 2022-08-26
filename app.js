// CommonJS, every file in Node is a module (by default)
// Modules - encapsulated code (only share the minimum, share only what we want)

const { john, peter } = require("./4-firstModule")
const sayHi = require("./5-secondModule")

const alternatives = require("./6-alternativeFlavor")
// console.log(alternatives)

// require("./7-mindGranade")

sayHi('Susan')
sayHi(john)
sayHi(peter)
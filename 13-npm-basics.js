// npm (node package mandager) - global command, comes with node
// npm --version

// local dependency - use it only in a particular project
// npm i <package-name>

// global dependency - use it in any project
// npm install -g <package-name>
// sudo npm install -g <package-name> (mac)
// npx: the ideia is => I can run a cli tool without installling this globally
// ex: npx create-react-app my-app

// package.json - manifest file (stores important info about project/package)
// Can be create by:
// - Manual approach: create package.json in the root
// - npm init (step by step, press enter to skip)
// - npm init -y (everything default)

const _ = require("lodash")

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)

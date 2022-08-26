// Synchronous: Block code
const { readFileSync, writeFileSync } = require("fs")

const first = readFileSync("./content/first.txt", "utf8")
const second = readFileSync("./content/second.txt", "utf8")

writeFileSync(
  "./content/third.txt", 
  `This is the third file: ${first}, ${second}`,
  { flag: "a" }
)
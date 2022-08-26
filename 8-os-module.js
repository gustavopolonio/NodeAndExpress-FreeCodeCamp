const os = require("os")

// Info about the current user
const user = os.userInfo()
console.log(user)

// Method to return the system uptime
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMen: os.totalmem(),
  freeMen: os.freemem()
}
console.log(currentOs)
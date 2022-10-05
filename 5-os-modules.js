const os = require('os')

// info about current User

const user = os.userInfo()
console.log(user)

// method returns the system uptime seconds 
console.log(`The system Uptime is ${os.uptime()} seconds`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMom:os.freemem(),
}
console.log(currentOs)
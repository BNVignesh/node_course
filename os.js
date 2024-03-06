const os=require('os');
const { uptime } = require('process');

const funcs={
    user:os.userInfo(),
    uptime:os.uptime(),
    type:os.type(),
    release:os.release(),
    mem:os.totalmem(),
    freemem:os.freemem()
}
console.log(funcs);
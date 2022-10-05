const path = require('path')

console.log(path.sep)

const filePath = path.join('./content/', 'subfol','test.txt')
console.log(filePath)

const base = path.basename(filePath);
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfol', 'test.txt')
console.log(absolute)
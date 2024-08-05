var gen = require('generate-password')

var password = gen.generate({
    length:10, numbers: true
})
console.log(password)
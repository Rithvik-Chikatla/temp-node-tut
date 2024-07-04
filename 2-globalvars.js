// globals - no window

// __dirname
// __filename
// require - fn to use modules(CommonJS)
// module - info about cur module (file)
// process - info about env where the prog is being executed

console.log(__dirname)
console.log(require)

setTimeout(() => {
    console.log('hello world')
}, 1000)
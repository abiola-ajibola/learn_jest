const sum = require("./sum")
const objectize = require("./objects")
const doString = require("./strings")
const arrays = require("./arrays")
const test_throws = require("./throws")
const fetchData = require("./async_testing/callback")
const promiseFetch = require("./async_testing/promises")
const asyncFetch = require("./async_testing/asyncAwait")

console.log(sum(1, 2))
console.log(objectize("a_key", "a_value"))
console.log(doString("Hello there!"))
console.log(arrays("arrays"))
fetchData(console.log)
promiseFetch().then(console.log)
asyncFetch().then(console.log)

// test_throws.throws()

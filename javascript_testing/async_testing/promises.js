const fetch = require("node-fetch")

function promiseFetch () {
    return fetch("https://jsonplaceholder.typicode.com/todos/1").then(res => res.json())
}

module.exports = promiseFetch
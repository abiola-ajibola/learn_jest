const fetch = require("node-fetch")

async function asyncFetch() {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    let data = await res.json()
    return data
}

module.exports = asyncFetch

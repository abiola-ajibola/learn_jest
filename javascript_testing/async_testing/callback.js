const fetch = require("node-fetch")

async function fetchData (callback) {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    let data = await res.json()
    // console.log(data)
    callback(data)
    return data
}

module.exports = fetchData
const multiply = (x,y) => x * y 

function processArray (array, operand, callback) {
    return array.map(item => callback(item, operand))
}

module.exports = {multiply, processArray}
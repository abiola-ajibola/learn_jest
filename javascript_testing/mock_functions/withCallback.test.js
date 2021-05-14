const {processArray, multiply} = require("./withCallback")

test("test with mock function", () => {

    const myMockfn = jest.fn(x => x + 2)
    processArray([1, 2, 3, 4], 4, myMockfn)
    // console.log(myMockfn.mock)
    expect(myMockfn.mock.calls.length).toBe(4)
    expect(myMockfn.mock.results[3].value).toBe(6)
    expect(myMockfn.mock.results[2].value).toBe(5)
    expect(myMockfn.mock.calls[0]).toEqual([1,4])
})


// You can ignore this, it is just for testing the callback function
test("Multiply two numbers", () => {
    expect(multiply(2,5)).toBe(10)
})
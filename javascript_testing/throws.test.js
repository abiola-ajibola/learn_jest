const test_throws = require("./throws")

test("throw an error", () => {
    expect(() => test_throws.throws()).toThrow() // Notice how the throws function was called in a wrapping function
})
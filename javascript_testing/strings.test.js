const doString = require("./strings")

test("test strings", () => {
    expect(doString("12gtf")).toMatch(/[0-9]/)
})
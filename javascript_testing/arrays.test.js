const arrays = require("./arrays")

test("Split a string into array", () => {
    expect(arrays("powerful")).toContain("p")
})
const sum = require("./sum")

test("add 1 and 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(1 + 2)
    expect(sum(0.1, 0.2)).not.toBe(0.3)
    expect(sum(0.1,0.2)).toBeCloseTo(0.3)
    expect(sum(10,10)).toEqual(20)
})

test(" 2 and 3 not equal 8", () => {
    expect(sum(2, 3)).toBeLessThan(8)
    expect(sum(20, 3)).toBeGreaterThan(8)
    expect(sum(20, 3)).toBeGreaterThanOrEqual(23)
    expect(sum(20,3)).toBeLessThanOrEqual(sum(20,20))

})

const objectize = require("./objects")

// This fails because toBe cannot be used for objects
// test("test object using toBe", () => {
//     expect(objectize("a_key", "a_value")).toBe({a_key: "a_value"})
// })

test("test object using toEqual", () => {
    let obj = objectize("a_key", "a_value")
    expect(obj).toEqual({ a_key: "a_value" })
    expect(obj).toBeDefined()
    expect(obj).not.toBeUndefined()
    expect(obj).toBeTruthy()
    expect(obj).not.toBeFalsy()
    expect(obj).not.toBeNull()
})

test("test object using .not.toEqual", () => {
    expect(objectize("a_key", "a_value")).not.toEqual(["a_key", "a_value"])
})
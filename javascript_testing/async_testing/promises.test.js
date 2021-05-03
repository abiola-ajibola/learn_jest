const promiseFetch = require("./promises")

test("Test a promise", () => {
    return promiseFetch().then(data => { // notice the return statement (it is important)
        expect(data.userId).toBe(1)
        expect(data.id).toBeGreaterThanOrEqual(1)
        expect(data.title).toMatch(/\w/)
    })
})

const fetchData = require("./callback")

test("Async callback", done => {
    function callback(data) {
       try {
           expect(data.userId).toBe(1)
           expect(data.id).toBeGreaterThanOrEqual(1)
           expect(data.title).toMatch(/\w/)
           done()
       } catch (e) {
        done(e)
       }
    }

    fetchData(callback)
})

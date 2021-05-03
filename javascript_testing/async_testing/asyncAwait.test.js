const asyncFetch = require("./asyncAwait")

test("Let's use async await", async () => {
    const data = await asyncFetch()
    expect(data.userId).toBe(1)
    expect(data.id).toBeGreaterThanOrEqual(1)
    expect(data.title).toMatch(/\w/)
})
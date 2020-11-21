const fv = require('../../src')

describe("Formater - time & date", () => {
    test("it should format date with moment.js", () => {
        const result = fv.formatDate('2000-12-23 14:30', 'dd-MM-yyyy')
        expect(result).toEqual('Sa-12-2000')
    })
})
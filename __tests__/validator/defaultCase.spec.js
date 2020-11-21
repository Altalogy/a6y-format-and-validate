const fv = require('../../src')

describe("Validator - default case", () => {
  test("it should not return invalid for unknown cases", () => {
    const inputs = {
      title: ''
    }

    const fields = [
      {
        name: 'title',
        rules: [
          {
            type: 'SOME_NOT_EXISTING_CASE'
          }
        ]
      }
    ]

    const result = fv.validate(inputs, fields)
    expect(result.isValid).toEqual(true)
    expect(Object.keys(result.errors).includes('title')).toEqual(false)
  })
})
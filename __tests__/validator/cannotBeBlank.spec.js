const fv = require('../../src')

describe("Validator - Cannot be blank", () => {
    test("it should return invalid for empty value", () => {
      const inputs = {
        title: ''
      }

      const fields = [
        {
          name: 'title',
          rules: [
            {
              type: 'CANNOT_BE_BLANK'
            }
          ]
        }
      ]

      const result = fv.validate(inputs, fields)
      expect(result.isValid).toEqual(false)
      expect(result.errors.title.length).toEqual(1)
    })

    test("it should return valid for non-empty value", () => {
      const inputs = {
        title: 'Some title'
      }

      const fields = [
        {
          name: 'title',
          rules: [
            {
              type: 'CANNOT_BE_BLANK'
            }
          ]
        }
      ]

      const result = fv.validate(inputs, fields)
      expect(result.isValid).toEqual(true)
      expect(Object.keys(result.errors).includes('title')).toEqual(false)
    })
})
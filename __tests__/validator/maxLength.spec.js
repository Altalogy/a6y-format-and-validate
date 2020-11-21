const fv = require('../../src')

describe("Validator - maximum length", () => {
    test("it should return invalid for too long strings", () => {
      const inputs = {
        title: 'This title is too loooong'
      }

      const fields = [
        {
          name: 'title',
          rules: [
            {
              type: 'MAX_LENGTH',
              limit: 15
            }
          ]
        }
      ]

      const result = fv.validate(inputs, fields)
      expect(result.isValid).toEqual(false)
      expect(result.errors.title.length).toEqual(1)
    })

    test("it should return valid", () => {
      const inputs = {
        title: 'Short title'
      }

      const fields = [
        {
          name: 'title',
          rules: [
            {
              type: 'MAX_LENGTH',
              limit: 15
            }
          ]
        }
      ]

      const result = fv.validate(inputs, fields)
      expect(result.isValid).toEqual(true)
      expect(Object.keys(result.errors).includes('title')).toEqual(false)
    })
})
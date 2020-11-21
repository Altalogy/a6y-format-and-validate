// const regEmail = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/

export function validate(values, fields) {
  let isValid = true
  let errors = {}
  fields.map((field, idx) => {
    if (field.rules) {      
      field.rules.map(rule => {
        const fieldErrors = []
        switch (rule.type) {
          case 'CANNOT_BE_BLANK':
            if (!values[field.name] || values[field.name].length < 1) {
              fieldErrors.push(rule.type)
              isValid = false
            }
            break
          case 'MAX_LENGTH':
            if (values[field.name] && values[field.name].length > rule.limit) {
              fieldErrors.push(rule.type)
              isValid = false
            }
          default:
            break
        }
        if (fieldErrors.length > 0) {
          errors[field.name] = fieldErrors
        }
      })
    }
  })
  return { isValid: isValid, errors: errors }
}

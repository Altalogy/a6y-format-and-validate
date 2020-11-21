## A6Y - Format and validate

Format and validate form's fields values.


### Quick start

1. Install:

```bash
$ yarn add @altalogy/a6y-format-and-validate
```

2. Import:

```javascript
import * as fv from '@altalogy/a6y-format-and-validate'

// Or:

import { formatDate } from '@altalogy/a6y-format-and-validate'
```

3. Use:

```javascript
fv.formatDate('2000-12-30 14:30', 'dd-MM-yyyy')

// Or:

formatDate('2000-12-30 14:30', 'dd-MM-yyyy')

// Output: Sa-30-2000

```


### Validator usage

The `validate` functions takes two params:

* `values` - map of values: `{ 'field-name': 'field-value' }`,
* `fields` - configuration containing validation rules.

The `fields` configuration contains:

* `name` - the field name (the same as `'field-name'`),
* `rules` - array of constraints that the field's values has to satisfy. Each `rule` contains a type and may contain additional fields.

Examples:

```javascript
// Values from the form:
const values = {
  title: 'My title',
  description: 'Some description',
  price: 12.99
}

// The validation config defining fields constraints:
const fields = [

  // The 'title' field:
  {
    name: 'title', // The field name
    rules: [
      {
        type: 'CANNOT_BE_BLANK' // The rule type
      },
      {
        type: 'MAX_LENGTH', // The rule type
        limit: 100 // Some rules may require additional data, like the length limit in MAX_LENGTH case
      }
    ]
  }

  // The 'description' field
  {
    name: 'title', // The field name
    rules: [
      {
        type: 'MAX_LENGTH',
        limit: 255
      }
    ]
  }

]

```

The `validate()` function returns:

```javascript

import { validate } from '@altalogy/a6y-format-and-validate'


const values = { ... } // form values
const fields = [ ... ] // the fields configuration

validate(values, fields)

// Return:

{
  isValid: false, // false if any of values is invalid. True if all are valid.
  errors: {
    fieldName: [ 'CANNOT_BE_BLANK' ], // the array of invalid rules for the 'fieldName' field.
    title: [ 'MAX_LENGTH' ]
  }
}
```


Available cases:


```javascript
// CANNOT_BE_BLANK
{
  type: 'CANNOT_BE_BLANK',
}


// MAX_LENGTH
{
  type: 'MAX_LENGTH',
  limit: 100
}

```




### Formater usage

#### Format Date

Formats date using moment.js:

```javascript
import { formatDate } from '@altalogy/a6y-format-and-validate'

// formatDate(value, format)
formatDate('2000-12-30 14:30', 'dd-MM-yyyy')

```

### Development

1. Add a new function to validate or format value in: `./src`

2. Add JSDoc comment what the function does.

3. Add test in `__tests__`


### LICENSE

MIT
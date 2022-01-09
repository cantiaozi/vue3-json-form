const Ajv = require('ajv')
const addFormats = require('ajv-formats')
const localize = require('ajv-i18n')
const ajv = new Ajv({ allErrors: true })
require('ajv-errors')(ajv)
addFormats(ajv)
ajv.addFormat('test', (val) => {
  return val === 'haha'
})
ajv.addKeyword({
  keyword: 'constant',
  validate: function fun(schema, data) {
    // fun.errors = [
    //   {
    //     message: 'xxx',
    //   },
    // ]
    console.log(schema, data)
    if (schema) {
      return true
    } else {
      return data.length > 5
    }
  },
  errors: false,
})
ajv.addKeyword({
  keyword: 'exclusiveRange',
  compile(schema, parentSchema) {
    return () => {
      return true
    }
  },
  metaSchema: {
    type: 'boolean',
  },
})
ajv.addKeyword({
  keyword: 'range',
  type: 'number',
  compile([min, max], parentSchema) {
    console.log('compile', min, max, parentSchema)
    return parentSchema.exclusiveRange === true
      ? (data) => data > min && data < max
      : (data) => data >= min && data <= max
    // return () => true
  },
})

const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      // format: 'test',
      constant: true,
      errorMessage: {
        type: '必须是字符串哦',
        constant: '必须是constant',
      },
    },
    age: {
      type: 'number',
      range: [2, 35],
      exclusiveRange: true,
    },
    pets: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
  },
  required: ['name'],
}
const data = {
  name: 4,
  age: 30,
  pets: ['mimi', 'titi'],
}
const valid = ajv.validate(schema, data)
if (!valid) {
  console.log(ajv.errors)
  localize.zh(ajv.errors)
  // string with all errors and data paths
  console.log(ajv.errorsText(ajv.errors, { separator: '\n' }))
}

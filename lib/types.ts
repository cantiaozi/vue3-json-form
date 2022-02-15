import { PropType, DefineComponent } from 'vue'

export enum SchemaType {
  STRING = 'string',
  NUMBER = 'number',
  OBJECT = 'object',
  BOOLEAN = 'boolean',
  ARRAY = 'array',
  INTEGER = 'integer',
}
type SchemaRef = { $ref: string }
export type Schema = {
  type?: SchemaType | string
  const?: any
  format?: string
  title?: string
  default?: any
  properties?: {
    [key: string]: Schema
  }
  items?: Schema | Schema[] | SchemaRef
  uniqueItems?: any
  dependencies?: {
    [key: string]: string[] | Schema | SchemaRef
  }
  oneOf?: Schema[]
  anyOf?: Schema[]
  allOf?: Schema[]
  // TODO: uiSchema
  // vjsf?: VueJsonSchemaConfig
  required?: string[]
  enum?: any[]
  enumNames?: any[]
  enumKeyValue?: any[]
  additionalProperties?: any
  additionalItems?: Schema

  minLength?: number
  maxLength?: number
  minimun?: number
  maximum?: number
  multipleOf?: number
  exclusiveMaximum?: number
  exclusiveMinimum?: number
}

export const FormItemProps = {
  schema: {
    type: Object as PropType<Schema>,
    required: true,
  },
  value: {
    required: true,
  },
  onChange: {
    type: Function as PropType<(args: any) => void>,
    required: true,
  },
  rootSchema: {
    type: Object as PropType<Schema>,
    required: true,
  },
} as const

// SchemaForm组件中的provide方法中的第二个参数的类型
export interface SchemaFormProvide {
  //typeof这里的用法是在类型中的作用，而不是赋值中的作用
  //typeof在类型中的作用是将后面的参数推断为类型
  SchemaItem: any
}

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
  type: SchemaType
  const?: any
  format?: string
  default?: any
  properties?: {
    [key: string]: Schema | { $ref: string }
  }
  items?: Schema | Schema[] | SchemaRef
  dependencies?: {
    [key: string]: string[] | Schema | SchemaRef
  }
  oneOf?: Schema[]
  // vjsf?: VueJsonSchemaConfig
  required?: string[]
  enum?: any[]
  enumKeyValue?: any[]
  additionalProperties?: any
  additionalItems?: Schema
}

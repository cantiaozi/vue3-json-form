import { defineComponent, inject, DefineComponent } from 'vue'
import { FormItemProps, SchemaFormProvide } from '../types'
import { SchemaFormProvideKey } from '../context'
import { isObject } from '../utils'
type SchemaItemDefine = DefineComponent<typeof FormItemProps>
export default defineComponent({
  name: 'ObjectField',
  props: FormItemProps,
  setup(props) {
    const { schema, rootSchema, onChange } = props
    const context = inject<SchemaFormProvide>(SchemaFormProvideKey)
    const SchemaItem: SchemaItemDefine = context!.SchemaItem
    const properties = schema.properties || {}
    const value: any = isObject(props.value) ? props.value : {}
    const handleChange = (key: string, val: any) => {
      if (val === undefined) {
        delete value[key]
      } else {
        value[key] = val
      }
      onChange(value)
    }
    return () => {
      return Object.keys(properties).map((key: string, index: number) => {
        return (
          <SchemaItem
            schema={properties[key]}
            value={value[key]}
            rootSchema={rootSchema}
            onChange={(val: any) => handleChange(key, val)}
            key={index}
          ></SchemaItem>
        )
      })
    }
  },
})

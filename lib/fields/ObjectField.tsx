import { defineComponent, inject, DefineComponent } from 'vue'
import { FormItemProps, SchemaFormProvide } from '../types'
import { isObject } from '../utils'
import { useFormItem } from '../hooks/index'
import { Form, Field } from 'vant'
export default defineComponent({
  name: 'ObjectField',
  props: FormItemProps,
  setup(props) {
    const { schema, rootSchema, onChange } = props
    const SchemaItem = useFormItem()
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
      return (
        // <Form>
        Object.keys(properties).map((key: string, index: number) => {
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
        // </Form>
      )
    }
  },
})

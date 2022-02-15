import { defineComponent, PropType, provide } from 'vue'
import { Schema, SchemaFormProvide } from './types'
import SchemaItem from './SchemaItem'
import { SchemaFormProvideKey } from './context'
export default defineComponent({
  name: 'SchemaForm',
  props: {
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
  },
  setup(props, { slots, emit, attrs }) {
    const provideContext = {
      SchemaItem,
    }
    provide<SchemaFormProvide>(SchemaFormProvideKey, provideContext)
    return () => {
      const { schema, value, onChange } = props
      const handleChange = (val: any) => {
        onChange(val)
      }
      return (
        <SchemaItem
          schema={schema}
          rootSchema={schema}
          value={value}
          onChange={handleChange}
        />
      )
    }
  },
})

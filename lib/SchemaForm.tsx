import { defineComponent, PropType } from 'vue'
import { Schema, SchemaType } from './types'
import SchemaItem from './SchemaItem'
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
    return () => {
      const { schema, value, onChange } = props
      const handleChange = (val: any) => {
        onChange(val)
      }
      return (
        <SchemaItem schema={schema} value={value} onChange={handleChange} />
      )
    }
  },
})

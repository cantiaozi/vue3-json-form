import { defineComponent, PropType } from 'vue'
import { Schema, SchemaType } from './types'
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
      let html: any
      switch (props.schema.type) {
        case SchemaType.STRING:
          return <input type="text"></input>
          break

        default:
          break
      }
      return <div>this is form</div>
    }
  },
})

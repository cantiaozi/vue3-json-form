import { defineComponent, PropType } from 'vue'
import { Schema, SchemaType } from './types'
import StringField from './fields/StringField.vue'
import NumberField from './fields/NumberField.vue'

export default defineComponent({
  name: 'SchemaItem',
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
  setup(props) {
    return () => {
      let componet: any
      switch (props.schema.type) {
        case SchemaType.STRING:
          componet = StringField
          break
        case SchemaType.NUMBER:
          componet = NumberField
          break

        default:
          break
      }
      return <componet {...props} />
    }
  },
})

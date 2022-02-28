import { computed, defineComponent, PropType } from 'vue'
import { Schema, SchemaType, FormItemProps } from './types'
import StringField from './fields/StringField.vue'
import NumberField from './fields/NumberField.vue'
import ObjectField from './fields/ObjectField'
import ArrayField from './fields/ArrayField'
import { retrieveSchema } from './utils'
export default defineComponent({
  name: 'SchemaItem',
  props: FormItemProps,
  setup(props) {
    const retrieveSchemaRef = computed(() => {
      const { schema, rootSchema, value } = props
      return retrieveSchema(schema, rootSchema, value)
    })
    return () => {
      let componet: any
      const retrieveSchema = retrieveSchemaRef.value
      switch (props.schema.type) {
        case SchemaType.STRING:
          componet = StringField
          break
        case SchemaType.NUMBER:
          componet = NumberField
          break
        case SchemaType.OBJECT:
          componet = ObjectField
          break
        case SchemaType.ARRAY:
          componet = ArrayField
          break
        default:
          break
      }
      return <componet {...props} schema={retrieveSchema} />
    }
  },
})

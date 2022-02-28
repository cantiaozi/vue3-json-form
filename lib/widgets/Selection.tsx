import { defineComponent, PropType, ref, watch } from 'vue'
export default defineComponent({
  name: 'selectWidget',
  props: {
    value: {
      required: true,
    },
    onChange: {
      type: Function as PropType<(val: any) => void>,
      required: true,
    },
    options: {
      type: Array as PropType<
        {
          key: string
          value: any
        }[]
      >,
      required: true,
    },
  },
  setup(props) {
    const currentValue = ref(props.value)
    watch(
      () => props.value,
      (newVal) => {
        if (newVal !== currentValue.value) {
          currentValue.value = newVal
        }
      },
    )
    watch(currentValue, (newVal) => {
      props.onChange(currentValue.value)
    })
    return () => {
      return (
        <select multiple={true} v-model={currentValue.value}>
          {props.options.map((item) => {
            return <option value={item.value}>{item.key}</option>
          })}
        </select>
      )
    }
  },
})

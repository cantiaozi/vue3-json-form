import { defineComponent } from 'vue'
import { FormItemProps } from '../types'
export default defineComponent({
  name: 'NumberField',
  props: FormItemProps,
  setup(props) {
    return () => {
      return <div>number field</div>
    }
  },
})

import { defineComponent } from 'vue'
import { FormItemProps } from '../types'
export default defineComponent({
  name: 'ObjectField',
  props: FormItemProps,
  setup() {
    return () => {
      return <div>ObjectField</div>
    }
  },
})

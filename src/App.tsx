/* eslint-disable */
import { defineComponent, Ref, ref } from 'vue'
import MonacoEditor from './components/MonacoEditor'
import { createUseStyles } from 'vue-jss'

const useStyles = createUseStyles({
  editor: {
    minHeight: 400,
  },
})

function toJson(data: any): string {
  return JSON.stringify(data, null, 2)
}
const schema = {
  type: 'string',
}
export default defineComponent({
  setup() {
    const nameRef = ref('liuyong')
    setInterval(() => {
      nameRef.value += '1'
    }, 1000)

    const classRef = useStyles()

    const schemaRef: Ref<any> = ref(schema)
    const handleCodeChange = (code: string) => {
      let schema: any
      try {
        schema = JSON.parse(code)
      } catch (err) {}
      schemaRef.value = schema
    }
    return () => {
      const code = toJson(schemaRef.value)
      return (
        <div>
          <MonacoEditor
            code={code}
            onChange={handleCodeChange}
            title="Schema"
            class={classRef.value.editor}
          ></MonacoEditor>
        </div>
      )
    }
  },
})

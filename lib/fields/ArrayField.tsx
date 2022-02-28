import { useFormItem } from '../hooks/index'
import { defineComponent, PropType } from 'vue'
import { FormItemProps, Schema } from '../types'
import Selection from '../widgets/Selection'
const ArrayItemWrapper = defineComponent({
  name: 'ArrayItemWrapper',
  props: {
    onAdd: {
      type: Function as PropType<(index: number) => void>,
      required: true,
    },
    onDelete: {
      type: Function as PropType<(index: number) => void>,
      required: true,
    },
    onUp: {
      type: Function as PropType<(index: number) => void>,
      required: true,
    },
    onDown: {
      type: Function as PropType<(index: number) => void>,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  setup(props, { slots }) {
    const { onAdd, onDelete, onDown, onUp, index } = props
    const handleAdd = () => {
      onAdd(index)
    }
    const handleDelete = () => {
      onDelete(index)
    }
    const handleUp = () => {
      onUp(index)
    }
    const handleDown = () => {
      onDown(index)
    }
    return () => {
      return (
        <div>
          <div>
            <button onClick={handleAdd}>新增</button>
            <button onClick={handleDelete}>删除</button>
            <button onClick={handleUp}>上移</button>
            <button onClick={handleDown}>下移</button>
          </div>
          <div>{slots.default && slots.default()}</div>
        </div>
      )
    }
  },
})
export default defineComponent({
  name: 'ArrayField',
  props: FormItemProps,
  setup(props) {
    const SchemaItem = useFormItem()
    const handleChange = (val: any, index: number) => {
      const arr = Array.isArray(props.value) ? props.value : []
      arr[index] = val
      props.onChange(arr)
    }
    const handleOnAdd = (index: number) => {
      const arr = Array.isArray(props.value) ? props.value : []
      arr.splice(index + 1, 0, undefined)
      props.onChange(arr)
    }
    const handleOnDelete = (index: number) => {
      const arr = Array.isArray(props.value) ? props.value : []
      arr.splice(index, 1)
      props.onChange(arr)
    }
    const handleOnUp = (index: number) => {
      if (index === 0) return
      const arr = Array.isArray(props.value) ? props.value : []
      const item = arr.splice(index, 1)
      arr.splice(index - 1, 0, item[0])
      props.onChange(arr)
    }
    const handleOnDown = (index: number) => {
      const arr = Array.isArray(props.value) ? props.value : []
      if (index === arr.length - 1) return
      const item = arr.splice(index, 1)
      arr.splice(index + 1, 0, item[0])
      props.onChange(arr)
    }
    return () => {
      const { schema, rootSchema, value, onChange } = props
      const isItemArray = Array.isArray(schema.items)
      const isSelect = schema.items && (schema.items as Schema).enum
      const currentValue = Array.isArray(value) ? value : []
      if (isItemArray) {
        return (schema.items as Schema[]).map(
          (schema: Schema, index: number) => {
            return (
              <SchemaItem
                schema={schema}
                value={currentValue[index]}
                rootSchema={rootSchema}
                onChange={(val: any) => {
                  handleChange(val, index)
                }}
              ></SchemaItem>
            )
          },
        )
      } else if (!isSelect) {
        return currentValue.map((val: any, index: number) => {
          return (
            <ArrayItemWrapper
              index={index}
              onAdd={handleOnAdd}
              onDelete={handleOnDelete}
              onUp={handleOnUp}
              onDown={handleOnDown}
            >
              <SchemaItem
                schema={schema.items as Schema}
                value={val}
                rootSchema={rootSchema}
                onChange={(val: any) => {
                  handleChange(val, index)
                }}
              ></SchemaItem>
            </ArrayItemWrapper>
          )
        })
      } else {
        const options = (schema.items as Schema).enum!.map((item) => {
          return {
            key: item,
            value: item,
          }
        })
        return (
          <Selection
            value={value}
            onChange={onChange}
            options={options}
          ></Selection>
        )
      }
    }
  },
})

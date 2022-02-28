import { inject, DefineComponent } from 'vue'
import { SchemaFormProvide, FormItemProps } from '../types'
import { SchemaFormProvideKey } from '../context'
export type SchemaItemDefine = DefineComponent<typeof FormItemProps>
export const useFormItem = () => {
  const context = inject<SchemaFormProvide>(SchemaFormProvideKey)
  if (!context) {
    throw new Error('SchemaForm need')
  }
  const SchemaItem: SchemaItemDefine = context.SchemaItem
  return SchemaItem
}

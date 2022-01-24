<template>
  <input type="number" :value="value" @input="handleChange" />
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
import { FormItemProps } from '../types'
const props = defineProps(FormItemProps)
const handleChange = (e: InputEvent) => {
  const num = Number((e.target as HTMLInputElement).value)
  if (Number.isNaN(num)) {
    props.onChange(undefined)
  } else {
    props.onChange(num)
  }
}
</script>

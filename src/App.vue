<template>
  <div>number</div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const number = ref(3)
    return {
      number,
    }
  },
})
</script>

<style></style>

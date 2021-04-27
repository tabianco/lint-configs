<template>
  <div>
    <h1>Hello, World!</h1>
    <span>{{ count }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'ValidVue',

  props: {
    value: {
      type: String,
      default: undefined
    }
  },

  setup () {
    const count = ref<number>(0)

    return {
      count
    }
  }
})
</script>

<style scoped>
span {
  padding: 8px 12px;
}
</style>

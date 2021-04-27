<template>
  <div><div></div>
    <h1>Hello, World!</h1><span>{{ count }}</span></div>
</template>
<script>export default {
  name: 'ValidVue',
  props: {
    value: String
  },
  data :{
      count: 0
  }
}
</script>
<style scoped>
span {  padding: 8px 12px}
</style>

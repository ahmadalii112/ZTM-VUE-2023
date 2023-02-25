<template>
    <p v-if="age > 25">{{ msg }}</p>
    <p v-else>You Must be 25 years and older to view this message</p>
</template>

<script>
  export default {
    name: 'Greeting',
    props: ["age"],
    data() {
      return {
        msg:  "Hello World"
      }
    },
  }
</script>
<style scoped lang="scss">
p:hover {
    color: darken($color: #cc4444, $amount: 15%);
}
</style>
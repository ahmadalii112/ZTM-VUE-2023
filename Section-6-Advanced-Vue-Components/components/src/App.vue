<template>
  <p>Hey</p>
  <Greeting/>
</template>

<script>
// add component Locally 
import Greeting from '@/components/Greeting.vue'
  export default {
    name: 'App',
    components: {
      Greeting
    }
  }
</script>

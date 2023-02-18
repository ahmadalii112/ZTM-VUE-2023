<template>
    <h3>Hey</h3>
    <button type="button" @click="age++">Button</button>
  <Greeting :age="age"/>
  <user :age="age"></user>
</template>

<script>
// add component Locally 
import Greeting from '@/components/Greeting.vue'
import User from '@/components/User.vue'
  export default {
    name: 'App',
    components: {
      Greeting,
      User
    },
    data() {
      return {
        age:20
      }
    }
  }
</script>

<template>
    <h3>Hey</h3>
  <Greeting :age="age"/>
  <user :age="age" @age-change="updateAge"></user> <!-- Listen to an emit event we use 👈 -->
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
    },
    methods: {
        updateAge(num) {
            this.age = this.age + num;
        }
    },
  }
</script>

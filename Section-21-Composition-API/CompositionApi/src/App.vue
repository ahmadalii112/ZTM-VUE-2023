<template>
  <div>
    <p>{{ num }}</p>
    <button @click.prevent="increment" type="button">Click Me</button>
  </div>
</template>

<script>
import {ref} from "vue"; // For reactivity

export default {
  name: "App",
  setup() {
    let num = ref(0); // ref function returns an object
    console.log(num);
    function increment(){
      num.value++
    }

    return {
      num,
      increment,
    }
  }
};
</script>

<template>
  <div>
    <p>{{ num }}</p>
    <button @click.prevent="increment" type="button">Click Me</button>
<!--    <p>{{ user.name }}</p>-->
    <p>{{ name }}</p>
  </div>
</template>

<script>
// import {ref, reactive} from "vue"; // For reactivity
import {ref, reactive, toRefs } from "vue"; // the two refs functions converts an object's properties into separate reactive references

export default {
  name: "App",
  setup() {
    let num = ref(0); // ref function returns an object
    console.log(num);
    function increment(){
      num.value++
    }

    const user = reactive({
      name: "Ahmad",
      age: 20
    });

    setTimeout(() => {
      user.name = "Ali"
    }, 3000);

    return {
      num,
      increment,
      // user,
      ...toRefs(user), // Spread Operator
    }
  }
};


/*
TODO:  REF vs Reactive

ref()
- Primitive Values
- Values must accessed via the value property


reactive()
- Objects
- Values from properties can be accessed directly

*/


</script>
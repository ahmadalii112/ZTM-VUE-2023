<template>
  <div>
    <p>{{ num }}</p>
    <p>{{ double }}</p>
    <button @click.prevent="increment" type="button">Click Me</button>
    <!--    <p>{{ user.name }}</p>-->
    <p>{{ name }}</p>

    <p>
      <input type="text" v-model="phrase"/>
    </p>
    <p>{{ reveredPhrase }}</p>
  </div>
</template>

<script>
// import {ref, reactive} from "vue"; // For reactivity
// import {ref, reactive, toRefs } from "vue"; // the two refs functions converts an object's properties into separate reactive references
// import {ref, reactive, toRefs, watchEffect} from "vue"; // watchEffect => watch dependencies of the function
// import {ref, reactive, toRefs, watchEffect, watch } from "vue";
import {ref, reactive, toRefs, watchEffect, watch, computed } from "vue";

export default {
  name: "App",
  setup() {
    let num = ref(0); // ref function returns an object
    console.log(num);
    function increment(){
      num.value++
    }

    const double = computed(() => {
      return num.value * 2;
    })

    const user = reactive({
      name: "Ahmad",
      age: 20
    });

    setTimeout(() => {
      user.name = "Ali"
    }, 3000);
    const phrase = ref("");
    const reveredPhrase = ref("");

    // One Way of using Watcher
    watchEffect(() => {
      reveredPhrase.value = phrase.value.split("").reverse().join("");
    });
    /* Second Way of using Watcher
        - it watches only phrase because we pass it
        - in function we can pass two args newVal and oldVal
        - if we watch multiple dependencies then we pass first args as an array [phrase] and function parameters also will be as an array [newValue, oldValue]
    watch([phrase], ([newValue, oldValue]) => {
      reveredPhrase.value = phrase.value.split("").reverse().join("");
    });
    */

    return {
      num,
      increment,
      // user,
      ...toRefs(user), // Spread Operator
      phrase,
      reveredPhrase,
      double
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
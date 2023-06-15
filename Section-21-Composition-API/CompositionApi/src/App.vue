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

    <app-alert :user="user"/>
    <button type="button" ref="btn">Button</button>
  </div>
</template>

<script setup>
import {
  ref,
  reactive,
  toRefs,
  onBeforeMount,
  onMounted
} from "vue";
import AppAlert from "@/components/Alert.vue";
import {useNumber} from "./hooks/number";
import {usePhrase} from "./hooks/phrase";

const btn = ref(null) // It will also save template reference too
onBeforeMount(() => {
  console.log("on before Mount")
})
onMounted(() => {
  console.log("on Mount")
  btn.value.addEventListener('click', () => {
    console.log("Button Clicked")
  })
})

const user = reactive({
  name: "Ahmad",
  age: 20
});

setTimeout(() => {
  user.name = "Ali"
}, 3000);


const {num, increment, double} = useNumber();
const {phrase, reveredPhrase, num: PhraseNum} = usePhrase()

const {name} = toRefs(user);


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
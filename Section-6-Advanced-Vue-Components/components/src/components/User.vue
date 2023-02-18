<template>
  <button type="button" @click="onClickAge">Button</button>
  <p>This user is {{ age }} years old</p>
  <p> {{ ageDoubled }}</p>
</template>

<script>
export default {
  name: "User",
  props: ["age"],
  emits: ['age-change'], // this process is necessary when we need to make any changes in props
  methods: {
    onClickAge() {
      // next step to emit an event
      this.$emit("age-change", 3); // any parent components can listen for the event, In my case my parent component is App
      // we can also pass value 
    },
  },
  computed: {
    ageDoubled(){
      return this.age * 2
    }
  },
};
</script>

<style></style>

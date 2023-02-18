<template>
  <button type="button" @click="onClickAge">Button</button>
  <p>This user is {{ age }} years old</p>
</template>

<script>
export default {
  name: "User",
  props: ["age"],
  methods: {
    onClickAge() {
      // next step to emit an event
      this.$emit("age-change"); // any parent components can listen for the event, In my case my parent component is App
    },
  },
};
</script>

<style></style>

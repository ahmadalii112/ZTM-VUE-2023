<template>
  <div v-if="!flag" style="color: red">Name Changed!</div>
</template>


<script>
import {computed} from "vue";

export default {
  props: ['user'],
  setup(props) {
  // setup(props, context) {
    // context.emit('eventName', {})
    const flag = computed(() => {
      return props.user.name === "Ahmad";
    });
    return {
      flag,
    };
  }
}
</script>


<style scoped>

</style>
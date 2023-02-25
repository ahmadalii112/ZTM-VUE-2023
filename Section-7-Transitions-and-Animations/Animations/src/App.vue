<template>
  <button type="button" @click="flag = !flag">Toggle</button>
  <!-- 
    default        |  when we give name
    v-enter-from   => fade-enter-from    
    v-enter-active => fade-enter-active
    v-enter-to     => fade-enter-to    
   -->
  <transition name="fade">
    <h2 v-if="flag">Hello World!</h2>
  </transition>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      flag: false,
    };
  },
};
</script>

<style>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.25s linear;
}

.fade-leave-to {
  transition: all 0.25s linear;
  opacity: 0;
}
</style>

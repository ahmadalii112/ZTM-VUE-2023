<template>
  <button type="button" @click="flag = !flag">Toggle</button>
                                      <!-- appear => sometimes U want to play the animation when the page is apper -->
  <transition name="zoom" type="animation" appear >
    <h2 v-if="flag">Hellooooo</h2>
  </transition>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      flag: true,
    };
  },
};
</script>

<style>
h2{
  width: 400px;
  padding:20px;
  margin:20px;
}

.fade-leave-to {
  transition: all 1s linear;
  opacity: 0;
}

.zoom-enter-active {
  animation: zoom-in 1s linear forwards;
  transition: all 2s linear; /* type attribute above use seconds which we type  */
}
.zoom-leave-active {
  transition: all 1s linear;
  animation: zoom-out 2s linear forwards; /* type attribute above use seconds which we type  */
}
.zoom-enter-from {
  opacity: 0;
}
.zoom-leave-to {
  opacity: 0;
}

/* Create a zooming animation */
@keyframes zoom-in {
  from {
    transform: scale(0,0);
  }
  to {
    transform: scale(1,1);
  }
}

@keyframes zoom-out {
  from {
    transform: scale(1,1);

  }
  to {
    transform: scale(0,0);
  }
}

</style>

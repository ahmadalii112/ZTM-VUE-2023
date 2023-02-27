<template>
  <button type="button" @click="flag = !flag">Toggle</button>
  <transition
    @before-enter="beforeEnter"
    @enter="Enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
  >
    <h2 v-if="flag">Hey!</h2>
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
  methods: {
    beforeEnter(el) {
        console.log("before-enter event fired", el);
    },
    Enter(el, done) {
      console.log("enter event fired", el);

      done();
    },
    afterEnter(el) {
      console.log("after-enter event fired", el);

    },
    beforeLeave(el) {
      console.log("before-leave event fired", el);

    },
    leave(el, done) {
      console.log("leave event fired", el);

      done();
    },
    afterLeave(el) {
      console.log("after-leave event fired", el);

    },
  },
};
</script>

<style>
h2 {
  width: 400px;
  padding: 20px;
  margin: 20px;
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
    transform: scale(0, 0);
  }
  to {
    transform: scale(1, 1);
  }
}

@keyframes zoom-out {
  from {
    transform: scale(1, 1);
  }
  to {
    transform: scale(0, 0);
  }
}
</style>

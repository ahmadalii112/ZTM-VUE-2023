<template>
  <button type="button" @click="flag = !flag">Toggle</button>
  <!-- <transition
    @before-enter="beforeEnter"
    @enter="Enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    :css="true"
    name="fade"
  >
    <h2 v-if="flag">Hey!</h2>
  </transition> -->
  <button @click="addItem">Add</button>
  <ul>
    <transition-group name="fade">
      <li v-for="(number, index) in numbers" 
        :key="number"
        @click="removeItem(index)">
      {{ number}}
    </li>
    </transition-group>
  </ul>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      flag: true,
      numbers: [1,2,3,4,5],
    };
  },
  methods: {
    addItem(){
      const num = Math.floor(Math.random() * 100 + 1); 
      const index = Math.floor(Math.random() * this.numbers.length); 
      this.numbers.splice(index, 0, num);
    },
    removeItem(index){
      this.numbers.splice(index,1);
    },
    beforeEnter(el) {
        console.log("before-enter event fired", el);
    },
    Enter(el) {
      console.log("enter event fired", el);
      // const animation = el.animate([{ transform: "scale3d(0,0,0)" }, {}], {
      //   duration: 1000,
      // })

      // animation.onFinish = () => {
      //   done();
      // };
    },
    afterEnter(el) {
      console.log("after-enter event fired", el);

    },
    beforeLeave(el) {
      console.log("before-leave event fired", el);

    },
    leave(el) {
      console.log("leave event fired", el);
      // const animation = el.animate([{}, { transform: "scale3d(0,0,0)"}], {
      //   duration: 1000,
      // })

      // animation.onFinish = () => {
      //   done();
      // };

    },
    afterLeave(el) {
      console.log("after-leave event fired", el);

    },
  },
};
</script>

<style>
li{
  font-size:22px;
  cursor: pointer
}
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

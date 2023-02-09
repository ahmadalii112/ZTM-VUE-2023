let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  },
  beforeCreate() {
    /* This hook is called before the Vue instance is initialized. */
    console.log('beforeCreate() function called!', this.message);
  },
  created() {
    /* This hook will be set to a function */
    console.log('created() function called!', this.message);
  },
  beforeMount() {
    /* This hook gets triggered once the template has been compiled but hasn't been added onto the page yet. */
    console.log('beforeMount() function called!', this.$el);
  },
  mounted() {
    /* This hook gets called after the template is mounted onto the page. */
    console.log('mounted() function called!', this.$el);
  },
  beforeUpdate() {
    console.log('beforeUpdate() function called!');
  },
  updated() {
    console.log('updated() function called!');
  },
  beforeUnmount() {
    console.log('beforeUnmount() function called!');
  },
  unmounted() {
    console.log('unmounted() function called!');
  },
})
vm.mount('#app')
// setTimeout(() => {
//   vm.mount('#app')
// }, 3000);
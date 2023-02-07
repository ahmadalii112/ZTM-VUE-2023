let vm = Vue.createApp({
    data() {
        return {
            isPurple: false,
            selectedColorProperty: '',
        }
    },
    computed: {
        circle_classes() {
            return {
                // classname: condition
                purple: this.isPurple,
            }
        }
    },
}).mount('#app')
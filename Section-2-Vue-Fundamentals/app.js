let vm = Vue.createApp({
    data() {
        return {
            isPurple: false,
            selectedColorProperty: '',
            size: 150,
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
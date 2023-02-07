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
        },
        circle_size() {
            return {
                width: this.size + 'px',
                height: this.size + 'px',
                lineHeight: this.size + 'px'
            }
        },
        circle_rotation() {
            return {
                transform: 'rotate(30deg)'
            }
        }
    },
}).mount('#app')
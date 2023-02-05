const vm = Vue.createApp({
    data() {
        return {
            firstName: "Ahmad",
            lastName: "Ali",
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName.toUpperCase()} `;
        }
    },
}).mount('#app');
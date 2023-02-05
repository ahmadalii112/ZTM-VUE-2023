const vm = Vue.createApp({
    data() {
        return {
            firstName: "Ahmad",
            lastName: "Ali",
            url: "https://www.google.com/",
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName.toUpperCase()} `;
        }
    },
}).mount('#app');
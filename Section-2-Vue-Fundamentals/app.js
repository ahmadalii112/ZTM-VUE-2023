const vm = Vue.createApp({
    data() {
        return {
            firstName: "Ahmad",
            lastName: "Ali",
            url: "https://www.google.com/",
            rawUrl: '<a href="https://www.facebook.com/" target="_blank">Facebook </a>'
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName.toUpperCase()} `;
        }
    },
}).mount('#app');
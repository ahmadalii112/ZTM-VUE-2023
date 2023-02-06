const vm = Vue.createApp({
    data() {
        return {
            firstName: "Ahmad",
            lastName: "Ali",
            url: "https://www.google.com/",
            rawUrl: '<a href="https://www.facebook.com/" target="_blank">Facebook </a>',
            age: 20
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName.toUpperCase()} `;
        },
        increment () {
            this.age++;
        },
        updateLastName (msg, event) {
            console.log(msg);
            this.lastName = event.target.value;
        }
    },
}).mount('#app');
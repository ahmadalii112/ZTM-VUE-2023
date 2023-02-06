const vm = Vue.createApp({
    data() {
        return {
            firstName: "Ahmad",
            middleName: "",
            lastName: "Ali",
            url: "https://www.google.com/",
            rawUrl: '<a href="https://www.facebook.com/" target="_blank">Facebook </a>',
            age: 20
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.middleName}  ${this.lastName.toUpperCase()} `;
        },
        increment () {
            this.age++;
        },
        updateLastName (msg, event) {
            console.log(msg);
            this.lastName = event.target.value;
        },
        updateMiddleName (event) {
            this.middleName = event.target.value;
        }
    },
}).mount('#app');
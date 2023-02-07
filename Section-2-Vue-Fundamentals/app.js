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
        increment () {
            this.age++;
        },
        updateLastName (msg, event) {
            // console.log(msg);
            this.lastName = event.target.value;
        },
        updateMiddleName (event) {
            this.middleName = event.target.value;
        }
    },
    // if you have a functions that calculates the property you can use computed properties
    computed: {
        fullName() {
            console.log("Full Name Computed Called");
            return `${this.firstName} ${this.middleName}  ${this.lastName.toUpperCase()} `;
        },
    },
}).mount('#app');
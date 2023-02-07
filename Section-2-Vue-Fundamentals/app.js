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
    computed: {
        fullName() {
            console.log("Full Name Computed Called");
            return `${this.firstName} ${this.middleName}  ${this.lastName.toUpperCase()} `;
        },
    },
    /* watchers watch you data for changes. whenever a change occurs you can run a function to execute additional logic */
    watch: {
        age(newVal, oldVal){
            // computed properties can never be asynchronus while
            // you have freedom to perform asynchronus tasks in watchers
            setTimeout(() => {
                this.age = 25
            }, 2000);
        }
    },
}).mount('#app');
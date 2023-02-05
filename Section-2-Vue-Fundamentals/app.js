const vm = Vue.createApp({
    data() {
        return {
            firstName: "Ahmad",
            lastName: "Ali",
        }
    },
}).mount('#app');

// setTimeout(() => {
//     vm.firstName = "Aiman";
// }, 2000);
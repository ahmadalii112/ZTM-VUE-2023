const app = Vue.createApp({
    data() {
        return {
            firstName: "Ahmad",
            lastName: "Ali",
        }
    },
});
app.mount('#app');
const app1 = Vue.createApp({
    data() {
        return {
            firstName: "Aiman",
            lastName: "Ali",
        }
    },
});
app1.mount('#app1');
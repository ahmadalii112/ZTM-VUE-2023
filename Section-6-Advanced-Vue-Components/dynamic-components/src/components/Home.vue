<template>
  <h1>Home Page</h1>
</template>
<script>
export default {
    unmounted() {
        console.log("Home Component Unmounted");
    },
    activated(){
        console.log("Home Component Activated");
    },
    deactivated(){
        console.log("Home Component Deactivated");
    }
}
</script>
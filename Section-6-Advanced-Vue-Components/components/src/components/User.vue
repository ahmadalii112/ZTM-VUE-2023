<template>
<!--
    if we use here button
The changes will not be reflected in other components to another downside to updating a prop in a child 
If the parent component updates the age, those changes will override the changes in the child component.
The parent component has priority over changes to its data.
This means that the user component will use the age inside the app component instead of using its own 
-->
    <!-- <button type="button" @click="age++">Button</button> -->
  <p>This user is {{ age }} years old</p>
</template>

<script>
export default {
  name: "User",
  props: ["age"],
};
</script>

<style></style>

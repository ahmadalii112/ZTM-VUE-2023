<template>
  <app-form>
    <template v-slot:help>
      <p>{{ help}}</p>
    </template>
    <template v-slot:fields>
      <input type="text" placeholder="email" />
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
    </template>
    <template v-slot:buttons>
      <button type="submit">submit</button>
    </template>
    <p>Dummy Text</p>
  </app-form>

  <app-form>
    <template v-slot:help>
      <p>Contact text</p>
    </template>
    <template v-slot:fields>
      <input type="text" placeholder="name" />
      <input type="text" placeholder="message" />
    </template>
    <template v-slot:buttons>
      <button type="submit">submit</button>
    </template>
  </app-form>
</template>
<script>
import AppForm from "./components/Form.vue";
export default {
  components: { AppForm },
  name: "App",
  components: {
    AppForm,
  },
  data() {
    return {
      help: "This is Some Help Text."
    }
  },
};
</script>

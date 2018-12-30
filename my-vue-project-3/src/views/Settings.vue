<template>
  <div>
    <h1>Settings</h1>
    <p>This is a Settings page</p>My name is
    <input v-model="name">
    <button @click="changeName">Change</button>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "settings",
  computed: mapState(["settings"]),
  data: _ => ({ name: "" }),
  created() {
    this.name = this.settings.name;
  },
  methods: {
    changeName() {
      this.$store.commit("setName", this.name);
    }
  }
};
</script>
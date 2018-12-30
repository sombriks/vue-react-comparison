<template>
  <div>
    <h2>Hello, {{settings.name}}</h2>
    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/settings">Settings</router-link> |
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name:"my-menu",
  computed:mapState(["settings"])
}
</script>

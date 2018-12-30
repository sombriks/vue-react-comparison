<template>
  <div>
    <my-menu/>
    <router-view/>
  </div>
</template>
<script>
import Menu from "./components/Menu.vue"
export default {
  name:"app",
  components:{
    "my-menu":Menu
  }
}
</script>

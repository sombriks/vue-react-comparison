<template>
  <div>
    My name is
    <input v-model="name">
    and in reverse it is {{name.split("").reverse().join("")}}
  </div>
</template>
<script>
module.exports = {
  name: "app",
  data: _ => ({ name: "" })
};
</script>

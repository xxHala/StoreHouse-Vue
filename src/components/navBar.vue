<script setup>
import { RouterLink, RouterView } from "vue-router";
import login from "./login-form.vue";
import signup from "./signup-form.vue";
</script>

<template>
  <div class="navigation-bar">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/products">products</RouterLink>
      <RouterLink to="/categoris">categoris</RouterLink>
      <login />
      <signup />
    </nav>
  </div>
</template>

<style scoped>
.navigation-bar {
  display: flex;
  justify-content: space-between;
  top: 0;
  width: 100%;
  height: 50px;
}
.user-login {
  align-content: flex-end;
}

</style>

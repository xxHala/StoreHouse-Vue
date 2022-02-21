<script setup>
import TheWelcome from "@/components/TheWelcome.vue";
</script>

<template>
  <main>
    <div class="container">
    <TheWelcome />

    </div>
  </main>
</template>

<style scoped>
.container {
  margin: 0;
  position: absolute;
  display: flex;
  top: 50%; right: 50%;
  transform: translate(50%,-50%);
}
</style>
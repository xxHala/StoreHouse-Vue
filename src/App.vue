<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import navBar from "@/components/navBar.vue";
</script>

<template>
<header>
   <navBar/>
</header>
  <RouterView />
</template>

<style>
@import "@/assets/base.css";

main {
  position: relative;
    min-height: 900px;

}
header {
  margin: 2px 8px;
}
@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  margin-top: 10px;
  font-size: 22px;
  display: inline-block;
  text-decoration: none;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

</style>

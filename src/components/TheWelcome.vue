<script setup>
import HomePage from "./HomePage.vue";
import IconUsers from "./icons/IconUsers.vue";
import IconProducts from "./icons/IconProducts.vue";
</script>

<template>

  <HomePage>
    <template #icon>
      <IconProducts />
    </template>
    <template #heading> 
    <RouterLink to="/all-product"> Total Of Products </RouterLink>   
       </template>
  </HomePage>

  <HomePage>
    <template #icon>
      <IconUsers />
    </template>
    <template #heading> 
       <RouterLink to="/all-users"> Total Of Users </RouterLink>   
 </template>
  </HomePage>

</template>

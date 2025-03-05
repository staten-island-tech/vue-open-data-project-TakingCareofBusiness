<template>
  <div>
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
        <h1 class="text-6xl">Jonathan Ou</h1>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<style scoped></style>

<template>
  <div>
    <header>
      <div class="wrapper">
        <h1 class="text-6xl">Daily Inmate Info</h1>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<style scoped></style>

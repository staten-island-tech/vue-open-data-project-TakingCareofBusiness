<template>
  <div>
    <header>
      <div class="wrapper">
        <h1 class="text-6xl">Daily Inmate Info</h1>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/oldhead">Age Chart</RouterLink>
          <RouterLink to="/woah">Other Fart</RouterLink>
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

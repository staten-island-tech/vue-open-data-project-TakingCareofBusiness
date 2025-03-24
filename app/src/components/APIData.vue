<template>
  <div></div>
</template>

<script setup>
import { onMounted } from 'vue'
const API = 'https://data.cityofnewyork.us/resource/7479-ugqb.json'
onMounted(async () => {
  try {
    const response = await fetch(API)
    const info = await response.json()
    console.log(info)
  } catch (error) {
    console.log(error)
  }
})
</script>

<style lang="scss" scoped></style>

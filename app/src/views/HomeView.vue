<template>
  <div>
    <div class="flex flex-wrap gap-1 mt-1 justify-center">
      <ScreenCards v-for="item in data" :key="item.inmateid" :item="item" class="flex-none w-1/5">
      </ScreenCards>
      <h1>bye</h1>
    </div>
  </div>
</template>

<script setup>
import ScreenCards from '../components/ScreenCards.vue'
import { onMounted } from 'vue'
const API = 'https://data.cityofnewyork.us/resource/7479-ugqb.json'
let data = 0
onMounted(async () => {
  try {
    const response = await fetch(API)
    const info = await response.json()
    data = info
    console.log(info)
  } catch (error) {
    console.log(error)
  }
})
</script>

<style lang="scss" scoped></style>

<template>
  <div></div>
</template>

<script setup>
import TestChart from '../components/TestChart.vue'
const API = 'https://data.cityofnewyork.us/resource/7479-ugqb.json'
async function getData(URL) {
  try {
    const response = await fetch(URL)
    const info = await response.json()
    console.log(info)
  } catch (error) {
    console.log(error)
  }
}
getData(API)
</script>

<style lang="scss" scoped></style>

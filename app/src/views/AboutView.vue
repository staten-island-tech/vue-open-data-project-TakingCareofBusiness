<template>
  <div></div>
</template>

<script setup>
const API = 'https://data.cityofnewyork.us/resource/7479-ugqb.json'
async function getData(URL) {
  try {
    const response = await fetch(URL)
    const info = await response.json()
  } catch (error) {}
}
</script>

<style lang="scss" scoped></style>

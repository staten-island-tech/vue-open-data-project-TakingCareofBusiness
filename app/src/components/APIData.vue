<template>
    <div>

    </div>
</template>

<script setup>
const API = 'https://data.cityofnewyork.us/resource/7479-ugqb.json'
onMounted(
  () =>
    async function getData(URL) {
      try {
        const response = await fetch(URL)
        const info = await response.json()
        console.log(info)
      } catch (error) {
        console.log(error)
      }
    },
)
getData(API)
</script>

<style lang="scss" scoped>

</style>
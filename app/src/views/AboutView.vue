<template>
  <div><PieChart :data="pieData" /></div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import PieChart from '../components/PieChart.vue'
const API = 'https://data.cityofnewyork.us/resource/7479-ugqb.json'
const data = reactive([0, 0, 0, 0, 0, 0, 0])
onMounted(async () => {
  try {
    const response = await fetch(API)
    const info = await response.json()
    info.forEach((inmate) => {
      if (inmate.age < 20) {
        data[0] += 1
      } else if (inmate.age < 30) {
        data[1] += 1
      } else if (inmate.age < 40) {
        data[2] += 1
      } else if (inmate.age < 50) {
        data[3] += 1
      } else if (inmate < 60) {
        data[4] += 1
      } else if (inmate < 70) {
        data[5] += 1
      } else {
        data[6] += 1
      }
    })
    console.log(info)
  } catch (error) {
    console.log(error)
  }
})

const pieData = reactive({
  labels: ['Under 20', '20 - 30', '30 - 40', '40 - 50', '50 - 60', '60 - 70', 'Over 70'],
  datasets: [
    {
      data: data.value,
      backgroundColor: [
        '#ff5733',
        '#df4c2d',
        '#bf4126',
        '#9f3620',
        '#802b1a',
        '#602113',
        '#40160d',
      ],
    },
  ],
})
</script>

<style lang="scss" scoped></style>

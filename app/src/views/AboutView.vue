<template>
  <div>
    <h1 class="text-center text-3xl">Age of Inmates</h1>
    <div class="box"><PieChart class="height" :data="pieData" :key="pieDataKey" /></div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import PieChart from '../components/PieChart.vue'
const API = 'https://data.cityofnewyork.us/resource/7479-ugqb.json'
const data = reactive([0, 0, 0, 0, 0, 0, 0])
const pieDataKey = ref(0)
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
      } else if (inmate.age < 60) {
        data[4] += 1
      } else if (inmate.age < 70) {
        data[5] += 1
      } else {
        data[6] += 1
      }
    })
    pieDataKey.value += 1
  } catch (error) {
    console.log(error)
  }
})

const pieData = reactive({
  labels: ['Under 20', '20 - 30', '30 - 40', '40 - 50', '50 - 60', '60 - 70', 'Over 70'],
  datasets: [
    {
      data: data,
      backgroundColor: [
        '#FFCE56', // Light Yellow
        '#36A2EB', // Light Blue
        '#FF6384', // Light Pink
        '#4BC0C0', // Light Teal
        '#FF9F40', // Light Orange
        '#FFCD56', // Light Gold
        '#9966FF', // Light Purple
      ],
    },
  ],
})
</script>

<style scoped>
.height {
  height: 900px;
}
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffb6c1;
}
</style>

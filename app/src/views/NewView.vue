<template>
  <div>
    <h1 class="text-center text-3xl">Security Level for Inmates</h1>
    <BarChart class="text-md" :data="barData" :key="barDataKey" />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import BarChart from '../components/BarChart.vue'
const API = 'https://data.cityofnewyork.us/resource/7479-ugqb.json'
const data = reactive([0, 0, 0, 0])
const barDataKey = ref(0)
onMounted(async () => {
  try {
    const response = await fetch(API)
    const info = await response.json()
    info.forEach((inmate) => {
      if (inmate.custody_level === 'MIN') {
        data[0] += 1
      } else if (inmate.custody_level === 'MED') {
        data[1] += 1
      } else {
        data[2] += 1
      }
    })
    barDataKey.value += 1
  } catch (error) {
    console.log(error)
  }
})

const barData = reactive({
  labels: ['Minimum Security', 'Medium Security', 'Maximum Security'],
  datasets: [{ label: 'Amount of Inmates', data: data, backgroundColor: '#ff5733' }],
})
</script>

<style lang="scss" scoped></style>

<template>
  <div></div>
</template>

<script setup>
import { reactive } from 'vue'
const dataTime = reactive([time[0], time[1], time[2], time[3], time[4], time[5]])
const chartData = reactive({
  labels: ['School', 'Sleep', 'Exercise', 'Electronics', 'Travel', 'Essentials'],
  datasets: [
    {
      data: dataTime,
      backgroundColor: ['#FFCE56', '#36A2EB', '#FF6384', '#4BC0C0', '#FFA726', '#BF53FF'],
    },
  ],
})
</script>

<style lang="scss" scoped></style>

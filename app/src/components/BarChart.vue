<template>
  <div>
    <div>
      <Bar :data="props.data" :options="chartOptions" />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'
</script>

<style lang="scss" scoped></style>

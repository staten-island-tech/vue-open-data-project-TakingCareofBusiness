<template>
  <div>
    <Pie class="mt-[2rem]" :data="props.data" :options="pieChartOptions" />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const props = defineProps({
  data: Object,
})

const pieChartOptions = reactive({
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
})
</script>

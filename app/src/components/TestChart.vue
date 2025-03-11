<template>
  <div>
    <canvas ref="myChart"></canvas>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import Chart from 'chart.js'

export default {
  setup() {
    const myChartRef = ref(null) // Create a reference for the canvas element

    // Initialize chart after the component is mounted
    onMounted(() => {
      const ctx = myChartRef.value

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      })
    })

    return {
      myChartRef,
    }
  },
}
</script>

<style scoped>
/* Add any additional styling here */
</style>

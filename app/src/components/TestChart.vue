<template>
  <div>
    <canvas ref="myChart"></canvas>
    <h1>Hi</h1>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import Chart from 'chart.js' // Import Chart.js

export default {
  setup() {
    const myChartRef = ref(null) // Create a reference for the canvas element
    let chartInstance = null // To store the chart instance

    onMounted(() => {
      const ctx = myChartRef.value // Get the canvas DOM element

      if (ctx) {
        // Initialize the chart only if the canvas exists
        chartInstance = new Chart(ctx, {
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
      }
    })

    return {
      myChartRef, // Expose the reference to the template
    }
  },
}
</script>

<style scoped>
/* Add any additional styling here */
</style>

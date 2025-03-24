import { onMounted } from 'vue'
const API = 'https://data.cityofnewyork.us/resource/7479-ugqb.json'
let dat = 0
onMounted(async () => {
  try {
    const response = await fetch(API)
    const info = await response.json()
    dat = info
    console.log(info)
  } catch (error) {
    console.log(error)
  }
})
export let data = dat

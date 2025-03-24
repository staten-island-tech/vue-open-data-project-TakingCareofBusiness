<template>
  <div>
    <div class="w-1/1 h-1/1 border-2 border-black rounded-md">
      <h1 class="text-xs">Inmate's ID: {{ item.inmateid }}</h1>
      <h1 class="text-xs">Time admitted: {{ item.admitted_dt }}</h1>
      <h1 class="text-xs">Age of Inmate: {{ item.age }}</h1>
      <h1 class="text-xs">Race of Inmate: {{ item.race }}</h1>
      <h1 class="text-xs">Gender of Inmate: {{ item.gender }}</h1>
      <h1 class="text-xs">Custody Level: {{ item.custodylevel }}</h1>
    </div>
  </div>
</template>

<script setup>
defineProps({ item: Object })
</script>

<style lang="scss" scoped></style>

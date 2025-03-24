<template>
  <div>
    <div class="w-1/6 h-1/11 border-2 border-black rounded-md">
      <h1>{item.inmateid}</h1>
      <h1>{item.admitted_dt}</h1>
      <h1>{item.age}</h1>
      <h1>{item.race}</h1>
      <h1>{item.gender}</h1>
      <h1>{item.custodylevel}</h1>
    </div>
  </div>
</template>

<script setup>
defineProps({ item: Object })
</script>

<style lang="scss" scoped></style>

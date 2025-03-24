<template>
  <div>
    <APIData />
    <div class="flex flex-wrap gap-4 mt-4 justify-center">
      <ScreenCards v-for="item in list" :key="item.name" :item="item" class="flex-none w-1/6">
      </ScreenCards>
    </div>
  </div>
</template>

<script setup>
import APIData from '../components/APIData.vue'
import ScreenCards from '../components/ScreenCards.vue'
</script>

<style lang="scss" scoped></style>

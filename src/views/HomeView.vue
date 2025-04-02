<script setup>
// import { useExpenseStore } from '@/stores/expense'
import CurrentMonth from '@/components/CurrentMonth.vue'
import TheMonth from '@/components/TheMonth.vue'
import TheFilters from '@/components/TheFilters.vue'
import TheReport from '@/components/TheReport.vue'
</script>

<template>
  <main>
    <div>
      <h1 class="text-3xl font-bold">Monthly Travel Expenses</h1>
    </div>
    <div class="flex gap-5">
      <CurrentMonth />
      <TheFilters />
    </div>
    <div class="h-screen flex gap-2">
      <div class="w-4/5">
        <TheMonth />
      </div>
      <div class="w-1/4">
        <TheReport />
      </div>
    </div>
  </main>
</template>

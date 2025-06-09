<script setup>
// import { useExpenseStore } from '@/stores/expense'
import CurrentMonth from '@/components/CurrentMonth.vue'
import TheMonth from '@/components/TheMonth.vue'
import TheFilters from '@/components/TheFilters.vue'
import TheReport from '@/components/TheReport.vue'
import TheTotals from '@/components/TheTotals.vue'
<<<<<<< HEAD
import LanguageSelector from '@/components/LanguageSelector.vue'
=======
>>>>>>> 779e4dda31247d2c2986636b908037a96c071268
</script>

<template>
  <main class="p-4">
<<<<<<< HEAD
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-2xl font-bold text-gray-900">Travel Expense Calculator</h1>
      <LanguageSelector />
    </div>
=======
>>>>>>> 779e4dda31247d2c2986636b908037a96c071268
    <div class="mb-8">
      <h1 class="text-5xl font-bold text-blue-dark">Monthly Travel Expenses</h1>
    </div>

    <div class="flex gap-2">
      <div class="bg-white p-6 w-4/6 rounded-xl flex flex-col gap-4">
        <CurrentMonth />
        <TheMonth />
      </div>
      <div class="w-2/6">
        <TheFilters />
        <TheReport />
        <TheTotals />
      </div>
    </div>
  </main>
</template>

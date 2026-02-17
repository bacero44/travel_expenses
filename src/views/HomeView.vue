<script setup>
// import { useExpenseStore } from '@/stores/expense'
import CurrentMonth from '@/components/CurrentMonth.vue'
import TheMonth from '@/components/TheMonth.vue'
import TheFilters from '@/components/TheFilters.vue'
import TheReport from '@/components/TheReport.vue'
import TheTotals from '@/components/TheTotals.vue'
import LanguageSelector from '@/components/LanguageSelector.vue'
</script>

<template>
  <main class="p-4">
    <div class="flex flex-col md:flex-row justify-between items-center mb-8">
      <h1 class="text-3xl md:text-5xl font-bold text-blue-dark leading-none">
        Monthly Travel Expenses
        <small class="text-gray-500 text-sm mt-1 leading-none">Ride & Cry</small>
      </h1>
      <LanguageSelector />
    </div>

    <div class="flex flex-col lg:flex-row gap-4">
      <div class="bg-white p-6 w-full lg:w-4/6 rounded-xl flex flex-col gap-4">
        <CurrentMonth />
        <TheMonth />
      </div>
      <div class="md:w-2/6">
        <TheFilters />
        <TheReport />
        <TheTotals />
      </div>
    </div>
  </main>
</template>

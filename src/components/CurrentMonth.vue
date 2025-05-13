<template>
  <div class="current-month">
    <h2 class="block mb-2 text-sm font-medium">Current Month Expenses</h2>
    <div class="flex">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="changeMonth('left')"
      >
        <IconArrow direction="left" />
      </button>
      <div>- {{ currentMonthName }} -</div>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="changeMonth('right')"
      >
        <IconArrow direction="right" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useExpenseStore } from '@/stores/expense'
import IconArrow from './icons/IconArrow.vue'

const store = useExpenseStore()

const currentMonthName = computed(() => store.currentMonthName)

const changeMonth = (direction) => {
  if (direction === 'left') {
    store.currentMonth = store.currentMonth > 1 ? store.currentMonth - 1 : 12
  } else if (direction === 'right') {
    store.currentMonth = store.currentMonth < 12 ? store.currentMonth + 1 : 1
  }
  store.changeMonth(direction)
}
</script>

<style scoped></style>

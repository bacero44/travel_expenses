<template>
  <div class="current-month w-full">
    <div class="flex gap-2">
      <h2 class="flex-1 text-3xl font-bold text-dark-gray">
        {{ currentMonthName }} {{ currentYear }}
      </h2>
      <div class="flex-1 flex justify-end gap-4">
        <button class="cursor-pointer" @click="changeMonth('left')">
          <IconArrow direction="left" size="30" color="#595959" />
        </button>

        <button class="cursor-pointer" @click="changeMonth('right')">
          <IconArrow direction="right" size="30" color="#595959" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useExpenseStore } from '@/stores/expense'
import IconArrow from './icons/IconArrow.vue'

const store = useExpenseStore()

const currentMonthName = computed(() => store.currentMonthName)
const currentYear = computed(() => store.currentYear)

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

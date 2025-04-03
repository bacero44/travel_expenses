<template>
  <div>
    <div class="grid grid-cols-7 gap-2 text-center">
      <div v-for="(day, index) in weekDays" :key="index" class="flex justify-center">
        {{ day }}
      </div>
      <div v-for="(day, dayIndex) in monthDays" :key="dayIndex" class="">
        <div v-if="day" class="flex justify-center">
          <TheDay :date="new Date(currentYear, currentMonth - 1, day)" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useExpenseStore } from '@/stores/expense'

import TheDay from './TheDay.vue'

const store = useExpenseStore()

const currentYear = computed(() => store.currentYear)
const currentMonth = computed(() => store.currentMonth)
const weekDays = computed(() => store.days)

const daysInMonth = computed(() => new Date(currentYear.value, currentMonth.value, 0).getDate())
const firstDay = computed(() => new Date(currentYear.value, currentMonth.value - 1, 1).getDay())

const monthDays = computed(() => {
  const firstDayOfWeek = firstDay.value
  const days = []
  for (let i = 0; i < firstDayOfWeek; i++) {
    days.push(null)
  }
  for (let i = 1; i <= daysInMonth.value; i++) {
    days.push(i)
  }
  return days
})
</script>

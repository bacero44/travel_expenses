<template>
  <div class="mt-4 bg-white rounded-xl p-4">
    <h3 class="text-1xl font-bold text-dark-gray">Totals</h3>

    <div class="flex pt-2 gap-4">
      <div class="flex-1 bg-blue-dark rounded-xl p-2">
        <h4 class="text-m font-bold text-white">Distance</h4>
        <div class="text-right text-2xl font-bold text-white">{{ total_distance }} Km</div>
      </div>
      <div class="flex-1 bg-blue-dark rounded-xl p-2">
        <h4 class="text-m font-bold text-white">total reimburs</h4>
        <div class="text-right text-2xl font-bold text-white">€ {{ total_reimbursement }}</div>
      </div>
      <div>?</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useExpenseStore } from '@/stores/expense'

const store = useExpenseStore()
const currentYear = computed(() => store.currentYear)
const currentMonth = computed(() => store.currentMonth)
const exceptionDays = computed(() => store.exceptionDays)
const notWorkingDays = computed(() => store.notWorkingDays)
const reimbursementPerKm = computed(() => store.reimbursementPerKm)
const kmPerDay = computed(() => store.kmPerDay)

const total_days = computed(() => {
  const year = currentYear.value
  const month = currentMonth.value

  const daysInMonth = new Date(year, month, 0).getDate()
  let total = 0

  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(year, month - 1, i)
    const dayOfWeek = date.getDay()

    const isExceptionDay = exceptionDays.value.includes(date.toDateString())
    const isNotWorkingDay = notWorkingDays.value.includes(dayOfWeek)

    if ((isExceptionDay && !isNotWorkingDay) || (!isExceptionDay && isNotWorkingDay)) {
      continue
    }
    total = total + 1
  }

  return total
})

const total_distance = computed(() => {
  return total_days.value * kmPerDay.value
})

const total_reimbursement = computed(() => {
  return (total_distance.value * reimbursementPerKm.value).toFixed(2)
})
</script>

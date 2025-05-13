<template>
  <div>
    <div class="relative shadow-md sm:rounded-lg max-w-full">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-3 py-3">Date</th>
            <th scope="col" class="px-3 py-3">Distance</th>
            <th scope="col" class="px-3 py-3">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="day in getMonthDates"
            :key="day"
            class="odd:bg-white even:bg-gray-50 border-b border-gray-200"
          >
            <th scope="row" class="px-3 py-2 font-medium text-gray-900 whitespace-nowrap">
              {{ day }}
            </th>
            <td class="px-3 py-2">
              {{ kmPerDay }}
            </td>
            <td>
              {{ reimbursementPerKm * kmPerDay }}
            </td>
          </tr>
        </tbody>
      </table>
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

const getMonthDates = computed(() => {
  const year = currentYear.value
  const month = currentMonth.value

  const daysInMonth = new Date(year, month, 0).getDate()
  let dates = []

  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(year, month - 1, i)
    const dateString = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
    const dayOfWeek = date.getDay()

    const isExceptionDay = exceptionDays.value.includes(date.toDateString())
    const isNotWorkingDay = notWorkingDays.value.includes(dayOfWeek)

    if ((isExceptionDay && !isNotWorkingDay) || (!isExceptionDay && isNotWorkingDay)) {
      continue
    }
    dates.push(dateString)
  }

  return dates
})
</script>

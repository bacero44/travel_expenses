<template>
  <div>
    <h2 style="font-size: 24px; font-weight: bold; margin-bottom: 16px">
      {{ currentYear }} - {{ currentMonthName }}
    </h2>
    <div>
      <table style="width: 100%; border-collapse: collapse; text-align: left">
        <thead>
          <tr>
            <th scope="col" style="padding: 12px; border-bottom: 2px solid #ccc">Date</th>
            <th scope="col" style="padding: 12px; border-bottom: 2px solid #ccc">Distance</th>
            <th scope="col" style="padding: 12px; border-bottom: 2px solid #ccc">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="day in monthData.dates" :key="day" style="border-bottom: 1px solid #f0f0f0">
            <th scope="row" style="padding: 12px; font-weight: bold">{{ day }}</th>
            <td style="padding: 12px">{{ kmPerDay }} Km</td>
            <td style="padding: 12px">€ {{ reimbursementPerKm * kmPerDay }}</td>
          </tr>
          <tr>
            <td style="padding: 12px; font-weight: bold; text-align: right">Total:</td>
            <td style="padding: 12px; font-weight: bold">{{ kmPerDay * monthData.total }}</td>
            <td style="padding: 12px; font-weight: bold">
              € {{ reimbursementPerKm * (kmPerDay * monthData.total) }}
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
const currentMonthName = computed(() => store.currentMonthName)
const exceptionDays = computed(() => store.exceptionDays)
const notWorkingDays = computed(() => store.notWorkingDays)
const reimbursementPerKm = computed(() => store.reimbursementPerKm)
const kmPerDay = computed(() => store.kmPerDay)

const monthData = computed(() => {
  const year = currentYear.value
  const month = currentMonth.value

  const daysInMonth = new Date(year, month, 0).getDate()
  let dates = []
  let total = 0

  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(year, month - 1, i)
    const dateString = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
    const dayOfWeek = date.getDay()

    const isExceptionDay = exceptionDays.value.includes(date.toDateString())
    const isNotWorkingDay = notWorkingDays.value.includes(dayOfWeek)

    if ((isExceptionDay && !isNotWorkingDay) || (!isExceptionDay && isNotWorkingDay)) {
      continue
    }

    total += 1
    dates.push(dateString)
  }

  return { dates, total }
})
</script>

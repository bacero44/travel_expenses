import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useI18n } from 'vue-i18n'

export const useExpenseStore = defineStore('expense', () => {
  const { t, locale, getLocaleMessage } = useI18n()
  const currentMonth = ref(1)
  const currentYear = ref(2025)

  const currentMonthName = computed(() => {
    return t(`months[${currentMonth.value - 1}]`)
  })
  const days = computed(() => {
    return getLocaleMessage(locale.value).days
  })

  const exceptionDays = ref([])

  const notWorkingDays = ref([0, 6])

  const reimbursementPerKm = ref(0.21)
  const kmPerDay = ref(42)

  return {
    currentMonth,
    currentMonthName,
    currentYear,
    days,
    exceptionDays,
    notWorkingDays,
    reimbursementPerKm,
    kmPerDay,
  }
})

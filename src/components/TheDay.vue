<template>
  <div
    @click="setExeption"
    :class="[
      'p-2 cursor-pointer',
      countDay ? 'bg-gray-100 text-gray-700' : 'bg-red-100 text-gray-500',
    ]"
  >
    {{ day }}
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useExpenseStore } from '@/stores/expense'

const props = defineProps({ date: Date })

const store = useExpenseStore()

const formattedDate = computed(() => props.date.toDateString())
const day = computed(() => props.date.getDate())

const setExeption = () => {
  const formatted = formattedDate.value
  const index = store.exceptionDays.indexOf(formatted)

  if (index === -1) {
    store.exceptionDays.push(formatted)
  } else {
    store.exceptionDays.splice(index, 1)
  }
}

const isAnException = computed(() => {
  return store.exceptionDays.includes(formattedDate.value)
})

const isNotWorkingDay = computed(() => {
  return store.notWorkingDays.includes(props.date.getDay())
})

const countDay = computed(() => {
  if (isAnException.value && isNotWorkingDay.value) {
    return true
  } else {
    return !isNotWorkingDay.value && !isAnException.value
  }
})
</script>

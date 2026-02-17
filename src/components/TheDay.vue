<template>
  <div
    @click="setExeption"
    class="w-25 h-20 md:w-40 md:h-25 rounded-xl text-center flex justify-center items-center cursor-pointer text-xl"
    :class="countDay ? 'bg-blue-light text-gray-800' : 'bg-light-gray text-gray-400'"
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

<template>
  <div class="flex">
    <div>
      <h2 class="block mb-2 text-sm font-medium">Working days</h2>

      <button
        v-for="(day, dayIndex) in days"
        :key="dayIndex"
        :value="dayIndex"
        class="px-4 py-2 font-semibold rounded-lg"
        :class="
          notWorkingDays.includes(dayIndex) ? 'bg-gray-200 text-gray-700' : 'bg-blue-500 text-white'
        "
        @click="setNotWorkingDay(dayIndex)"
      >
        {{ day }}
      </button>
    </div>
    <div class="flex">
      <div>
        <label for="support-per-kilometer" class="block mb-2 text-sm font-medium"
          >Support per kilometer</label
        >
        <div class="relative mb-6">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <IconEuro color="black" />
          </div>
          <input
            type="number"
            id="support-per-kilometer"
            class="text-sm block w-full ps-10 p-2.5"
            placeholder="0,21"
            v-model="reimbursementPerKm"
          />
        </div>
      </div>
      <div>
        <label for="support-per-kilometer" class="block mb-2 text-sm font-medium"
          >kilometer per day</label
        >
        <div class="relative mb-6">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <b>Km</b>
          </div>
          <input
            type="number"
            id="support-per-kilometer"
            class="text-sm block w-full ps-10 p-2.5"
            placeholder="0,21"
            v-model="kmPerDay"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useExpenseStore } from '@/stores/expense'
import IconEuro from './icons/IconEuro.vue'

const store = useExpenseStore()
const days = computed(() => store.days)
const notWorkingDays = computed(() => store.notWorkingDays)

const setNotWorkingDay = (day) => {
  const index = store.notWorkingDays.indexOf(day)
  if (index === -1) {
    store.notWorkingDays.push(day)
  } else {
    store.notWorkingDays.splice(index, 1)
  }
}

const reimbursementPerKm = computed({
  get: () => store.reimbursementPerKm,
  set: (value) => (store.reimbursementPerKm = value),
})

const kmPerDay = computed({
  get: () => store.kmPerDay,
  set: (value) => (store.kmPerDay = value),
})
</script>

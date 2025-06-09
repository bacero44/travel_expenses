<template>
  <div class="">
    <div class="bg-white rounded-xl p-4">
      <h3 class="text-1xl font-bold text-dark-gray">{{ $t('titles.goingDays') }}</h3>

      <div class="flex">
        <button
          v-for="(day, dayIndex) in days"
          :key="dayIndex"
          :value="dayIndex"
          class="flex-1 px-4 py-2 font-semibold rounded-lg mr-1"
          :class="
            notWorkingDays.includes(dayIndex)
              ? 'bg-light-gray text-gray-700'
              : 'bg-blue-dark text-white'
          "
          @click="setNotWorkingDay(dayIndex)"
        >
          {{ day }}
        </button>
      </div>
    </div>
    <div class="my-4 flex gap-4">
      <div class="bg-white rounded-xl p-4">
        <label for="support-per-kilometer" class="text-1xl font-bold text-dark-gray"
          >{{ $t('titles.supportPerKm') }}</label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <b class="text-dark-gray text-xl">€</b>
          </div>
          <input
            type="number"
            id="support-per-kilometer"
            class="text-1xl block w-full ps-10 p-2 text-right"
            placeholder="0,21"
            v-model="reimbursementPerKm"
          />
        </div>
      </div>
      <div class="bg-white rounded-xl p-4">
        <label for="kilometer-per-day" class="text-1xl font-bold text-dark-gray">
          {{ $t('titles.kmPerDay') }}
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <b class="text-dark-gray">Km</b>
          </div>
          <input
            type="number"
            id="kilometer-per-day"
            class="text-1xl block w-full ps-10 p-2 text-right"
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

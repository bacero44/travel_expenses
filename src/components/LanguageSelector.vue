<template>
  <div class="flex">
    <button
      @click="changeLanguage('en')"
      class="flex-1 px-2 py-1 text-sm font-semibold rounded-lg mr-1 transition-colors"
      :class="currentLocale === 'en' ? 'bg-blue-dark text-white' : 'bg-light-gray text-dark-gray hover:bg-blue-light hover:text-white'"
    >
      EN
    </button>
    <button
      @click="changeLanguage('es')"
      class="flex-1 px-2 py-1 text-sm font-semibold rounded-lg mr-1 transition-colors"
      :class="currentLocale === 'es' ? 'bg-blue-dark text-white' : 'bg-light-gray text-dark-gray hover:bg-blue-light hover:text-white'"
    >
      ES
    </button>
    <button
      @click="changeLanguage('nl')"
      class="flex-1 px-2 py-1 text-sm font-semibold rounded-lg transition-colors"
      :class="currentLocale === 'nl' ? 'bg-blue-dark text-white' : 'bg-light-gray text-dark-gray hover:bg-blue-light hover:text-white'"
    >
      NL
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const currentLocale = computed(() => locale.value)

const changeLanguage = (lang) => {
  locale.value = lang
}
</script> 
<script setup>
defineProps({
  size: { type: String, default: '24' },
  color: { type: String, default: 'currentColor' },
  direction: { type: String, default: 'right' },
})
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :transform="direction === 'left' ? 'rotate(180)' : ''"
  >
    <path
      d="M 13.8320 43.5625 C 14.4883 43.5625 14.9336 43.3516 15.4258 43.1172 L 41.7695 31.2813 C 43.1055 30.6484 44.1602 29.6172 44.1602 28.1172 C 44.1602 26.6406 43.1289 25.5625 41.7461 24.9532 L 15.4258 12.8359 C 14.9570 12.6016 14.5351 12.4375 13.9258 12.4375 C 12.7070 12.4375 11.8398 13.2813 11.8398 14.5235 C 11.8398 15.6016 12.4023 16.2110 13.3867 16.6797 L 38.6055 27.8125 L 38.6055 28.0703 L 13.3867 39.2969 C 12.4023 39.7656 11.8398 40.3750 11.8398 41.4531 C 11.8398 42.7422 12.6836 43.5625 13.8320 43.5625 Z"
      :fill="color"
    />
  </svg>
</template>

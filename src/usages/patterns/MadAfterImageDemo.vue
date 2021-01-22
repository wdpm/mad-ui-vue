<template>
  <h2>use cdn picture</h2>
  <mad-after-image
    :src="'https://cdn.vuetifyjs.com/images/parallax/material.jpg'"
    :width="'500px'"
  >
  </mad-after-image>

  <h2>use local picture</h2>
  <mad-after-image :src="require('@/assets/3.jpg').default"></mad-after-image>
</template>

<script>
import MadAfterImage from '@/patterns/MadAfterImage'

export default {
  name: 'MadAfterImageDemo',
  components: {
    MadAfterImage,
  },
}
</script>

<style scoped></style>

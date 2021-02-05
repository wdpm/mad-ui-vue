<template>
  <h2>basic</h2>
  <mad-line-noise :src="require('@/assets/7.jpg').default"></mad-line-noise>

  <h2>custom direction</h2>
  <mad-line-noise
    :src="require('@/assets/7.jpg').default"
    direction="right-leaning"
  ></mad-line-noise>
</template>

<script>
import MadLineNoise from '@/patterns/MadLineNoise'

export default {
  name: 'MadLineNoiseDemo',
  components: {
    MadLineNoise,
  },
}
</script>

<style scoped></style>

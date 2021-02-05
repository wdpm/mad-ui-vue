<template>
  <mad-line-noise
    :src="require('@/assets/7.jpg').default"
    direction="right-leaning"
  ></mad-line-noise>
</template>

<script>
import MadLineNoise from '@/patterns/MadLineNoise'

export default {
  name: 'MadLineNoiseUsageDirection',
  components: {
    MadLineNoise,
  },
}
</script>

<style scoped></style>

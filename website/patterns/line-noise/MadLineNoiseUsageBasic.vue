<template>
  <mad-line-noise :src="require('@/../website/assets/7.jpg').default"></mad-line-noise>
</template>

<script>
import MadLineNoise from '@/patterns/MadLineNoise'

export default {
  name: 'MadLineNoiseUsageBasic',
  components: {
    MadLineNoise,
  },
}
</script>

<style scoped></style>

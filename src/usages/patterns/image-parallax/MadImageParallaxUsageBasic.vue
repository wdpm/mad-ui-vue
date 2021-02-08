<template>
  <mad-image-parallax :src="require('@/assets/tairitsu-sunscreen.jpg').default">
  </mad-image-parallax>
</template>

<script>
import MadImageParallax from '@/patterns/MadImageParallax'

export default {
  name: 'MadImageParallaxUsageBasic',
  components: {
    MadImageParallax,
  },
}
</script>

<style scoped></style>

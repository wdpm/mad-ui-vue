<template>
  <mad-reveal-image
    :src="require('@/assets/12.jpg').default"
  ></mad-reveal-image>

  <h2>configurable</h2>
  <mad-reveal-image
    :src="require('@/assets/12.jpg').default"
    width="400px"
    height="250px"
    auto-play
  ></mad-reveal-image>
</template>

<script>
import MadRevealImage from '@/patterns/MadRevealImage'

export default {
  name: 'MadRevealImageDemo',
  components: {
    MadRevealImage,
  },
}
</script>

<style scoped></style>

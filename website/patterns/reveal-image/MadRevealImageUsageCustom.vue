<template>
  <mad-reveal-image
    :src="require('@/../website/assets/12.jpg').default"
    width="400px"
    height="250px"
    auto-play
  ></mad-reveal-image>
</template>

<script>
import MadRevealImage from '@/patterns/MadRevealImage'

export default {
  name: 'MadRevealImageUsageCustom',
  components: {
    MadRevealImage,
  },
}
</script>

<style scoped></style>

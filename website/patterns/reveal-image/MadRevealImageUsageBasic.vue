<template>
  <mad-reveal-image
    :src="require('@/../website/assets/12.jpg').default"
  ></mad-reveal-image>
</template>

<script>
import MadRevealImage from '@/patterns/MadRevealImage'

export default {
  name: 'MadRevealImageUsageBasic',
  components: {
    MadRevealImage,
  },
}
</script>

<style scoped></style>

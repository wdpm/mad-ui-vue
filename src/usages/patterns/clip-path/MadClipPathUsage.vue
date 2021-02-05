<template>
  <mad-clip-path
    :background-src="require('@/assets/7.jpg').default"
    :foreground-src="require('@/assets/6.jpg').default"
  ></mad-clip-path>

  <h2>custom height and width</h2>
  <mad-clip-path
    :background-src="require('@/assets/7.jpg').default"
    :foreground-src="require('@/assets/6.jpg').default"
    width="320px"
    height="180px"
  ></mad-clip-path>
</template>

<script>
import MadClipPath from '@/patterns/MadClipPath'

export default {
  name: 'MadClipPathUsage',
  components: {
    MadClipPath,
  },
}
</script>

<style scoped></style>

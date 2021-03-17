<template>
  <mad-clip-path
    :background-src="require('@/../website/assets/7.jpg').default"
    :foreground-src="require('@/../website/assets/6.jpg').default"
  ></mad-clip-path>
</template>

<script>
import MadClipPath from '@/patterns/MadClipPath'

export default {
  name: 'MadClipPathUsageBasic',
  components: {
    MadClipPath,
  },
}
</script>

<style scoped></style>

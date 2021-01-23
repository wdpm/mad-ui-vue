<template>
  <mad-image-cross :src="require('@/assets/1.png').default"></mad-image-cross>
</template>

<script>
import MadImageCross from '@/patterns/MadImageCross'

export default {
  name: 'MadImageCrossDemo.vue',
  components: {
    MadImageCross,
  },
}
</script>

<style scoped></style>

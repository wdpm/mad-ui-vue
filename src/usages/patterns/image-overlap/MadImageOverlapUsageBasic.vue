<template>
  <mad-image-overlap :src="require('@/assets/10.png').default" />
</template>

<script>
import MadImageOverlap from '@/patterns/MadImageOverlap'

export default {
  name: 'MadImageOverlapUsageBasic',
  components: {
    MadImageOverlap,
  },
}
</script>

<style scoped></style>

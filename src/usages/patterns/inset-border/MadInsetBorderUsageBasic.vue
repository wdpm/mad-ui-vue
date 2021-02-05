<template>
  <mad-inset-border :src="require('@/assets/1.png').default"></mad-inset-border>
</template>

<script>
import MadInsetBorder from '@/patterns/MadInsetBorder'

export default {
  name: 'MadInsetBorderUsageBasic',
  components: {
    MadInsetBorder,
  },
}
</script>

<style scoped lang="scss">
</style>

<template>
  <mad-inset-border
    :src="require('@/../website/assets/2.jpg').default"
    lined
  ></mad-inset-border>
</template>

<script>
import MadInsetBorder from '@/patterns/MadInsetBorder'

export default {
  name: 'MadInsetBorderUsageLined',
  components: {
    MadInsetBorder,
  },
}
</script>

<style scoped lang="scss"></style>

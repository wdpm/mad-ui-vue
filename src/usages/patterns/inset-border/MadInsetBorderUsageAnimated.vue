<template>
  <h3>
    with animation
    (background-slide-up/background-slide-down/background-scale-down)
  </h3>
  <p>note: reload page to see effect</p>
  <mad-inset-border
    :src="require('@/assets/2.jpg').default"
    lined
    animation="background-slide-up"
  ></mad-inset-border>
</template>

<script>
import MadInsetBorder from '@/patterns/MadInsetBorder'

export default {
  name: 'MadInsetBorderUsageAnimated',
  components: {
    MadInsetBorder,
  },
}
</script>

<style scoped lang="scss"></style>

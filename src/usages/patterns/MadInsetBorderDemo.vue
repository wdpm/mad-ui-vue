<template>
  <h2>basic</h2>
  <mad-inset-border :src="require('@/assets/1.png').default"></mad-inset-border>

  <h2>lined</h2>
  <mad-inset-border
    :src="require('@/assets/2.jpg').default"
    lined
  ></mad-inset-border>
</template>

<script>
import MadInsetBorder from '@/patterns/MadInsetBorder'

export default {
  name: 'MadInsetBorderDemo',
  components: {
    MadInsetBorder,
  },
}
</script>

<style scoped lang="scss"></style>

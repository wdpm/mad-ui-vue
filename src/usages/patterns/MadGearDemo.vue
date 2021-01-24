<template>
  <h2>basic</h2>
  <mad-gear></mad-gear>

  <h2>custom</h2>
  <mad-gear
    :tooth="16"
    :tooth-height="20"
    :tooth-width="30"
    :width="300"
    :height="300"
    border-color="blue"
    fill-color="pink"
    rotate-direction="counterclockwise"
  ></mad-gear>
</template>

<script>
import MadGear from '@/patterns/MadGear'

export default {
  name: 'MadGearDemo',
  components: {
    MadGear,
  },
}
</script>

<style scoped></style>

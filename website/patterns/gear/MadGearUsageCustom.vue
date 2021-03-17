<template>
  <mad-gear
    :tooth="16"
    :tooth-height="20"
    :tooth-width="30"
    :width="200"
    :height="200"
    border-color="blue"
    fill-color="pink"
    rotate-direction="counterclockwise"
  ></mad-gear>
</template>

<script>
import MadGear from '@/patterns/MadGear'

export default {
  name: 'MadGearUsageCustom',
  components: {
    MadGear,
  },
}
</script>

<style scoped></style>

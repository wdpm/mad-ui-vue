<template>
  <h3>indeterminate</h3>
  <mad-progress-bar></mad-progress-bar>

  <h3>indeterminate with color</h3>
  <mad-progress-bar
    v-for="value in colorMapValuesNoLight"
    :key="value"
    :color="value"
  ></mad-progress-bar>
</template>

<script>
import { colorMapValuesNoLight } from '@/../../../packages/utils/propValidateHelper'
import MadProgressBar from '@/elements/MadProgressBar'

export default {
  name: 'MadProgressBarUsageIndeterminate',
  components: {
    MadProgressBar,
  },
  data() {
    return {
      colorMapValuesNoLight,
    }
  },
}
</script>

<style scoped></style>

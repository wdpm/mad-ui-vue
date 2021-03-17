<template>
  <mad-progress-bar
    v-for="value in colorMapValuesNoLight"
    :key="value"
    :value="40"
    :color="value"
  ></mad-progress-bar>
</template>

<script>
import { colorMapValuesNoLight } from '@/../../../packages/utils/propValidateHelper'
import MadProgressBar from '@/elements/MadProgressBar'

export default {
  name: 'MadProgressBarUsageColor',
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

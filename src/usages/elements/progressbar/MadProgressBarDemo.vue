<template>
  <h2>no value</h2>
  <mad-progress-bar></mad-progress-bar>

  <h2>custom max value</h2>
  <mad-progress-bar :max="200" :value="50"></mad-progress-bar>

  <h2>with value</h2>
  <mad-progress-bar :value="40"></mad-progress-bar>

  <h2>colors</h2>
  <!--colors-->
  <mad-progress-bar
    v-for="value in colorMapValuesNoLight"
    :key="value"
    :value="40"
    :color="value"
  ></mad-progress-bar>

  <h2>sizes</h2>
  <mad-progress-bar
    v-for="size in sizes"
    :key="size"
    :value="40"
    :size="size"
  ></mad-progress-bar>

  <h2>indeterminate</h2>
  <mad-progress-bar></mad-progress-bar>

  <h2>indeterminate with color</h2>
  <mad-progress-bar
    v-for="value in colorMapValuesNoLight"
    :key="value"
    :color="value"
  ></mad-progress-bar>
</template>

<script>
import MadProgressBar from '@/elements/MadProgressBar'
import { colorMapValuesNoLight, sizes } from '@/utils/propValidateHelper'

export default {
  name: 'MadProgressBarDemo',
  components: {
    MadProgressBar,
  },
  data() {
    return {
      colorMapValuesNoLight,
      sizes,
    }
  },
}
</script>

<style scoped></style>

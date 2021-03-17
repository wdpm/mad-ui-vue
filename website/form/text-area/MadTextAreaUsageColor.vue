<template>
  <mad-text-area
    v-for="color in colors"
    :key="color"
    :color="color"
    placeholder="textarea placeholder"
  ></mad-text-area>
</template>

<script>
import MadTextArea from '@/form/MadTextArea'
import { colorMapSemanticValues, sizes } from '@/../../../packages/utils/propValidateHelper'

export default {
  name: 'MadTextAreaUsageColor',
  components: {
    MadTextArea,
  },
  data() {
    return {
      colors: colorMapSemanticValues,
      sizes: sizes,
    }
  },
}
</script>

<style scoped lang="scss"></style>

<template>
  <mad-text-area
    v-for="size in sizes"
    :key="size"
    :size="size"
    placeholder="textarea placeholder"
  ></mad-text-area>
</template>

<script>
import MadTextArea from '@/form/MadTextArea'
import { colorMapSemanticValues, sizes } from '@/../../../packages/utils/propValidateHelper'

export default {
  name: 'MadTextAreaUsageSize',
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

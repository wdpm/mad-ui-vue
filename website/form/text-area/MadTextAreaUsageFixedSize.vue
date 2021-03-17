<template>
  <mad-text-area fixed-size placeholder="textarea placeholder"></mad-text-area>
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

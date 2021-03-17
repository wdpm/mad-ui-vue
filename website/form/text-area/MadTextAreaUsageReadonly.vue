<template>
  <mad-text-area value="readonly value" readonly></mad-text-area>
</template>

<script>
import MadTextArea from '@/form/MadTextArea'
import { colorMapSemanticValues, sizes } from '@/../../../packages/utils/propValidateHelper'

export default {
  name: 'MadTextAreaUsageReadonly',
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

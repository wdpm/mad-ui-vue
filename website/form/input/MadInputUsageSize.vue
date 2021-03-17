<template>
  <mad-input size="small"></mad-input>
  <mad-input size="medium"></mad-input>
  <mad-input size="large"></mad-input>
</template>

<script>
import MadInput from '@/form/MadInput'
import { colorMapSemanticValues } from '@/../../../packages/utils/propValidateHelper'

export default {
  name: 'MadInputUsageSize',
  components: {
    MadInput,
  },
  data() {
    return {
      colors: colorMapSemanticValues,
    }
  },
}
</script>

<style scoped></style>

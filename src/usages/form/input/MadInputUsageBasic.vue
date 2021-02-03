<template>
  <mad-input placeholder="custom placeholder"></mad-input>
</template>

<script>
import MadInput from '@/form/MadInput'
import { colorMapSemanticValues } from '@/utils/propValidateHelper'

export default {
  name: 'MadInputUsageBasic',
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

<template>
  <mad-input v-for="color in colors" :key="color" :color="color"></mad-input>
</template>

<script>
import MadInput from '@/form/MadInput'
import { colorMapSemanticValues } from '@/../../../packages/utils/propValidateHelper'

export default {
  name: 'MadInputUsageColor',
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

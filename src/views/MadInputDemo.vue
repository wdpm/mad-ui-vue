<template>
  <h2>basic</h2>
  <mad-input placeholder="custom placeholder"></mad-input>

  <h2>sizes</h2>
  <mad-input size="small"></mad-input>
  <mad-input size="medium"></mad-input>
  <mad-input size="large"></mad-input>

  <h2>colors</h2>
  <mad-input v-for="color in colors" :key="color" :color="color"></mad-input>
</template>

<script>
import MadInput from '@/form/MadInput'
import { colorMapSemanticValues } from '@/utils'

export default {
  name: 'MadInputDemo',
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

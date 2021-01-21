<template>
  <h2>basic</h2>
  <mad-text-area placeholder="textarea placeholder"></mad-text-area>

  <h2>colors</h2>
  <mad-text-area
    v-for="color in colors"
    :key="color"
    :color="color"
    placeholder="textarea placeholder"
  ></mad-text-area>

  <h2>size</h2>
  <mad-text-area
    v-for="size in sizes"
    :key="size"
    :size="size"
    placeholder="textarea placeholder"
  ></mad-text-area>

  <h2>readonly</h2>
  <mad-text-area value="readonly value" readonly></mad-text-area>

  <h2>fixedSize</h2>
  <mad-text-area fixed-size placeholder="textarea placeholder"></mad-text-area>
</template>

<script>
import MadTextArea from '@/form/MadTextArea'
import { colorMapSemanticValues, sizes } from '@/utils'

export default {
  name: 'MadTextAreaDemo',
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

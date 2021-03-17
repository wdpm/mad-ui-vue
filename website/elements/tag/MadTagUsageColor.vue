<template>
  <mad-tag
    v-for="color in colors"
    :color="color"
    :key="color"
    :content="content"
  ></mad-tag>
</template>

<script>
import MadTag from '@/elements/MadTag'
import { colorMapValuesNoLight, sizes } from '@/utils/propValidateHelper'

export default {
  name: 'MadTagUsageColor',
  components: {
    MadTag,
  },
  data() {
    return {
      colors: colorMapValuesNoLight,
      sizes: sizes,
      content: 'tag content',
      title: 'tag title',
    }
  },
}
</script>

<style scoped></style>

<template>
  <h3>tag skew corner variant(must specify color attr)</h3>
  <mad-tag
    :title="title"
    :content="content"
    :color="'info'"
    corner-skew
  ></mad-tag>
  <mad-tag :content="content" :color="'info'" corner-skew></mad-tag>
</template>

<script>
import MadTag from '@/elements/MadTag'
import { colorMapValuesNoLight, sizes } from '@/../../../packages/utils/propValidateHelper'

export default {
  name: 'MadTagUsageSkewCorner',
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

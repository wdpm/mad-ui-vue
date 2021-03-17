<template>
  <mad-tag :title="title" :content="content"></mad-tag>
</template>

<script>
import MadTag from '@/elements/MadTag'
import { colorMapValuesNoLight, sizes } from '@/../../../packages/utils/propValidateHelper'

export default {
  name: 'MadTagUsageTitle',
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

<template>
  <mad-tag
    v-for="size in sizes"
    :key="size"
    :size="size"
    :content="content"
  ></mad-tag>
</template>

<script>
import MadTag from '@/elements/MadTag'
import { colorMapValuesNoLight, sizes } from '@/../../../packages/utils/propValidateHelper'

export default {
  name: 'MadTagUsageSize',
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

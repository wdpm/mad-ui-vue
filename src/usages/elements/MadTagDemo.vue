<template>
  <h2>tag colors</h2>
  <mad-tag
    v-for="color in colors"
    :color="color"
    :key="color"
    :content="content"
  ></mad-tag>

  <h2>tag sizes</h2>
  <mad-tag
    v-for="size in sizes"
    :key="size"
    :size="size"
    :content="content"
  ></mad-tag>

  <h2>tag with title</h2>
  <mad-tag :title="title" :content="content"></mad-tag>

  <h2>tag skew corner variant(must specify color attr)</h2>
  <mad-tag
    :title="title"
    :content="content"
    :color="'info'"
    corner-skew
  ></mad-tag>

  <h2>combination</h2>
  <mad-tag
    v-for="color in colors"
    :key="color"
    :color="color"
    corner-skew
    :title="title"
    :content="content"
  ></mad-tag>
</template>

<script>
import MadTag from '@/elements/MadTag'
import { colorMapValuesNoLight, sizes } from '@/utils/propValidateHelper'

export default {
  name: 'MadTagDemo',
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

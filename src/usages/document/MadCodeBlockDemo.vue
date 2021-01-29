<template>
  <mad-code-block :code="sampleCode" title="title" desc="desc">
    <p>code effect</p>
  </mad-code-block>
</template>

<script>
import MadCodeBlock from '@/document/MadCodeBlock'
import sampleCode from '!raw-loader!./sampleCode'

export default {
  name: 'MadCodeBlockDemo',
  components: {
    MadCodeBlock,
  },
  data() {
    return {
      sampleCode,
    }
  },
}
</script>

<style scoped lang="scss"></style>

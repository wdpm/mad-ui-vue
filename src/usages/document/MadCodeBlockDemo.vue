<template>
  <mad-code-block :code="sampleCodeRaw" title="title" desc="desc">
    <sample-code></sample-code>
  </mad-code-block>
</template>

<script>
import MadCodeBlock from '@/document/MadCodeBlock'
import SampleCodeRaw from '!raw-loader!@/document/SampleCode'
import SampleCode from "@/document/SampleCode"

export default {
  name: 'MadCodeBlockDemo',
  components: {
    MadCodeBlock,
    SampleCode,
  },
  data() {
    return {
      sampleCodeRaw: SampleCodeRaw,
    }
  },
}
</script>

<style scoped lang="scss"></style>

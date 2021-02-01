<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadBlockUsageBasicCode">
      <mad-block-usage-basic>block 1 text</mad-block-usage-basic>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadBlockUsageBasic from '@/usages/elements/block/MadBlockUsageBasic'
import MadBlockUsageBasicCode from '!raw-loader!@/usages/elements/block/MadBlockUsageBasic'

export default {
  name: 'MadBlockUsage',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadBlockUsageBasic,
  },
  data() {
    return {
      MadBlockUsageBasicCode,
    }
  },
}
</script>

<style scoped></style>

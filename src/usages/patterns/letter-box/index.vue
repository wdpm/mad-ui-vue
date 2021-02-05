<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadLetterBoxUsageBasicCode">
      <mad-letter-box-usage-basic></mad-letter-box-usage-basic>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadLetterBoxUsageBasic from '@/usages/patterns/letter-box/MadLetterBoxUsageBasic'
import MadLetterBoxUsageBasicCode from '!raw-loader!@/usages/patterns/letter-box/MadLetterBoxUsageBasic'

export default {
  name: 'IndexTemplate',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadLetterBoxUsageBasic,
  },
  data() {
    return {
      MadLetterBoxUsageBasicCode,
    }
  },
}
</script>

<style scoped></style>

<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadLetterPaperUsageBasicCode">
      <mad-letter-paper-usage-basic></mad-letter-paper-usage-basic>
    </mad-code-block>
    <mad-code-block title="transform" :code="MadLetterPaperUsageTransformCode">
      <mad-letter-paper-usage-transform></mad-letter-paper-usage-transform>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadLetterPaperUsageBasic from '@/usages/patterns/letter-paper/MadLetterPaperUsageBasic'
import MadLetterPaperUsageBasicCode from '!raw-loader!@/usages/patterns/letter-paper/MadLetterPaperUsageBasic'
import MadLetterPaperUsageTransform from '@/usages/patterns/letter-paper/MadLetterPaperUsageTransform'
import MadLetterPaperUsageTransformCode from '!raw-loader!@/usages/patterns/letter-paper/MadLetterPaperUsageTransform'

export default {
  name: 'IndexTemplate',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadLetterPaperUsageBasic,
    MadLetterPaperUsageTransform,
  },
  data() {
    return {
      MadLetterPaperUsageBasicCode,
      MadLetterPaperUsageTransformCode,
    }
  },
}
</script>

<style scoped></style>

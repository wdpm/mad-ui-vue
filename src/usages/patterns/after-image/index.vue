<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadAfterImageUsageBasicCode">
      <mad-after-image-usage-basic></mad-after-image-usage-basic>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadAfterImageUsageBasic from '@/usages/patterns/after-image/MadAfterImageUsageBasic'
import MadAfterImageUsageBasicCode from '!raw-loader!@/usages/patterns/after-image/MadAfterImageUsageBasic'

export default {
  name: 'IndexTemplate',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadAfterImageUsageBasic,
  },
  data() {
    return {
      MadAfterImageUsageBasicCode,
    }
  },
}
</script>

<style scoped></style>

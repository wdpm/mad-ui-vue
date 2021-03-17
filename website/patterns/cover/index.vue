<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadCoverUsageBasicCode">
      <mad-cover-usage-basic></mad-cover-usage-basic>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/../website/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadCoverUsageBasic from '@/../website/patterns/cover/MadCoverUsageBasic'
import MadCoverUsageBasicCode from '!raw-loader!@/../website/patterns/cover/MadCoverUsageBasic'

export default {
  name: 'IndexTemplate',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadCoverUsageBasic,
  },
  data() {
    return {
      MadCoverUsageBasicCode,
    }
  },
}
</script>

<style scoped></style>

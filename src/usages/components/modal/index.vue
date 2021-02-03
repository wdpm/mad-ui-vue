<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadModalUsageBasicCode">
      <mad-modal-usage-basic></mad-modal-usage-basic>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadModalUsageBasic from '@/usages/components/modal/MadModalUsageBasic'
import MadModalUsageBasicCode from '!raw-loader!@/usages/components/modal/MadModalUsageBasic'

export default {
  name: 'IndexTemplate',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadModalUsageBasic,
  },
  data() {
    return {
      MadModalUsageBasicCode,
    }
  },
}
</script>

<style scoped></style>

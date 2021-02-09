<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadHeaderUsageBasicCode">
      <mad-header-usage-basic></mad-header-usage-basic>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadHeaderUsageBasic from '@/usages/components/header/MadHeaderUsageBasic'
import MadHeaderUsageBasicCode from '!raw-loader!@/usages/components/header/MadHeaderUsageBasic'

export default {
  name: 'IndexTemplate',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadHeaderUsageBasic,
  },
  data() {
    return {
      MadHeaderUsageBasicCode,
    }
  },
}
</script>

<style scoped></style>

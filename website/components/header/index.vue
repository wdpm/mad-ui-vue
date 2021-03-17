<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadHeaderUsageBasicCode">
      <mad-header-usage-basic></mad-header-usage-basic>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/../website/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadHeaderUsageBasic from '@/../website/components/header/MadHeaderUsageBasic'
import MadHeaderUsageBasicCode from '!raw-loader!@/../website/components/header/MadHeaderUsageBasic'

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

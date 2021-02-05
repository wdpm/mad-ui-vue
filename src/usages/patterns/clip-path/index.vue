<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadClipPathUsageBasicCode">
      <mad-clip-path-usage-basic></mad-clip-path-usage-basic>
    </mad-code-block>
    <mad-code-block title="custom" :code="MadClipPathUsageCustomCode">
      <mad-clip-path-usage-custom></mad-clip-path-usage-custom>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadClipPathUsageBasic from '@/usages/patterns/clip-path/MadClipPathUsageBasic'
import MadClipPathUsageBasicCode from '!raw-loader!@/usages/patterns/clip-path/MadClipPathUsageBasic'
import MadClipPathUsageCustom from '@/usages/patterns/clip-path/MadClipPathUsageCustom'
import MadClipPathUsageCustomCode from '!raw-loader!@/usages/patterns/clip-path/MadClipPathUsageCustom'

export default {
  name: 'IndexTemplate',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadClipPathUsageBasic,
    MadClipPathUsageCustom,
  },
  data() {
    return {
      MadClipPathUsageBasicCode,
      MadClipPathUsageCustomCode,
    }
  },
}
</script>

<style scoped></style>

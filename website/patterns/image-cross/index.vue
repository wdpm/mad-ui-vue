<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadImageCrossUsageBasicCode">
      <mad-image-cross-usage-basic></mad-image-cross-usage-basic>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/../website/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadImageCrossUsageBasic from '@/../website/patterns/image-cross/MadImageCrossUsageBasic'
import MadImageCrossUsageBasicCode from '!raw-loader!@/../website/patterns/image-cross/MadImageCrossUsageBasic'

export default {
  name: 'IndexTemplate',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadImageCrossUsageBasic,
  },
  data() {
    return {
      MadImageCrossUsageBasicCode,
    }
  },
}
</script>

<style scoped></style>

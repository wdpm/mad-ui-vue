<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadImageOverlapUsageBasicCode">
      <mad-image-overlap-usage-basic></mad-image-overlap-usage-basic>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadImageOverlapUsageBasic from '@/usages/patterns/image-overlap/MadImageOverlapUsageBasic'
import MadImageOverlapUsageBasicCode from '!raw-loader!@/usages/patterns/image-overlap/MadImageOverlapUsageBasic'

export default {
  name: 'IndexTemplate',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadImageOverlapUsageBasic,
  },
  data() {
    return {
      MadImageOverlapUsageBasicCode,
    }
  },
}
</script>

<style scoped></style>

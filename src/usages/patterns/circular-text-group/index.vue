<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadCircularTextGroupUsageBasicCode">
      <mad-circular-text-group-usage-basic></mad-circular-text-group-usage-basic>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadCircularTextGroupUsageBasic from '@/usages/patterns/circular-text-group/MadCircularTextGroupUsageBasic'
import MadCircularTextGroupUsageBasicCode from '!raw-loader!@/usages/patterns/circular-text-group/MadCircularTextGroupUsageBasic'

export default {
  name: 'IndexTemplate',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadCircularTextGroupUsageBasic,
  },
  data() {
    return {
      MadCircularTextGroupUsageBasicCode,
    }
  },
}
</script>

<style scoped></style>

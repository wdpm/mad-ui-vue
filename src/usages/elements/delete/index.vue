<template>
  <mad-doc-page>
    <mad-code-block title="'basic'" :code="MadDeleteUsageBasicCode">
      <mad-delete-usage-basic></mad-delete-usage-basic>
    </mad-code-block>
    <mad-code-block title="'size'" :code="MadDeleteUsageSizeCode">
      <mad-delete-usage-size></mad-delete-usage-size>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadCodeBlock from '@/document/MadCodeBlock'
import MadDocPage from '@/document/MadDocPage'

import MadDeleteUsageBasic from '@/usages/elements/delete/MadDeleteUsageBasic'
import MadDeleteUsageSize from '@/usages/elements/delete/MadDeleteUsageSize'

import MadDeleteUsageBasicCode from '!raw-loader!@/usages/elements/delete/MadDeleteUsageBasic'
import MadDeleteUsageSizeCode from '!raw-loader!@/usages/elements/delete/MadDeleteUsageSize'

export default {
  name: 'index',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadDeleteUsageBasic,
    MadDeleteUsageSize,
  },
  data() {
    return {
      MadDeleteUsageBasicCode,
      MadDeleteUsageSizeCode,
    }
  },
}
</script>

<style scoped></style>

<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadExpansionUsageBasicCode">
      <mad-expansion-usage-basic></mad-expansion-usage-basic>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadExpansionUsageBasic from '@/usages/components/expansion/MadExpansionUsageBasic'
import MadExpansionUsageBasicCode from '!raw-loader!@/usages/components/expansion/MadExpansionUsageBasic'

export default {
  name: 'MadExpansionUsage',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadExpansionUsageBasic,
  },
  data() {
    return {
      MadExpansionUsageBasicCode,
    }
  },
}
</script>

<style scoped></style>

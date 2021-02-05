<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadGridUsageBasicCode">
      <mad-grid-usage-basic></mad-grid-usage-basic>
    </mad-code-block>
    <mad-code-block title="custom" :code="MadGridUsageCustomCode">
      <mad-grid-usage-custom></mad-grid-usage-custom>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadGridUsageBasic from '@/usages/patterns/grid/MadGridUsageBasic'
import MadGridUsageBasicCode from '!raw-loader!@/usages/patterns/grid/MadGridUsageBasic'
import MadGridUsageCustom from '@/usages/patterns/grid/MadGridUsageCustom'
import MadGridUsageCustomCode from '!raw-loader!@/usages/patterns/grid/MadGridUsageCustom'

export default {
  name: 'IndexTemplate',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadGridUsageBasic,
    MadGridUsageCustom,
  },
  data() {
    return {
      MadGridUsageBasicCode,
      MadGridUsageCustomCode,
    }
  },
}
</script>

<style scoped></style>

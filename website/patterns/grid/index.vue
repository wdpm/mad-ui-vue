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
import MadDocPage from '@/../website/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadGridUsageBasic from '@/../website/patterns/grid/MadGridUsageBasic'
import MadGridUsageBasicCode from '!raw-loader!@/../website/patterns/grid/MadGridUsageBasic'
import MadGridUsageCustom from '@/../website/patterns/grid/MadGridUsageCustom'
import MadGridUsageCustomCode from '!raw-loader!@/../website/patterns/grid/MadGridUsageCustom'

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

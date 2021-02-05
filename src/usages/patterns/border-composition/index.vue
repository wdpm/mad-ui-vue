<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadBorderCompositionUsageBasicCode">
      <mad-border-composition-usage-basic></mad-border-composition-usage-basic>
    </mad-code-block>
    <mad-code-block title="custom" :code="MadBorderCompositionUsageCustomCode">
      <mad-border-composition-usage-custom></mad-border-composition-usage-custom>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadBorderCompositionUsageBasic from '@/usages/patterns/border-composition/MadBorderCompositionUsageBasic'
import MadBorderCompositionUsageBasicCode from '!raw-loader!@/usages/patterns/border-composition/MadBorderCompositionUsageBasic'
import MadBorderCompositionUsageCustom from '@/usages/patterns/border-composition/MadBorderCompositionUsageCustom'
import MadBorderCompositionUsageCustomCode from '!raw-loader!@/usages/patterns/border-composition/MadBorderCompositionUsageCustom'

export default {
  name: 'IndexTemplate',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadBorderCompositionUsageBasic,
    MadBorderCompositionUsageCustom,
  },
  data() {
    return {
      MadBorderCompositionUsageBasicCode,
      MadBorderCompositionUsageCustomCode,
    }
  },
}
</script>

<style scoped></style>

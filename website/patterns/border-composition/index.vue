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
import MadDocPage from '@/../website/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadBorderCompositionUsageBasic from '@/../website/patterns/border-composition/MadBorderCompositionUsageBasic'
import MadBorderCompositionUsageBasicCode from '!raw-loader!@/../website/patterns/border-composition/MadBorderCompositionUsageBasic'
import MadBorderCompositionUsageCustom from '@/../website/patterns/border-composition/MadBorderCompositionUsageCustom'
import MadBorderCompositionUsageCustomCode from '!raw-loader!@/../website/patterns/border-composition/MadBorderCompositionUsageCustom'

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

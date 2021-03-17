<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadInsetBorderUsageBasicCode">
      <mad-inset-border-usage-basic></mad-inset-border-usage-basic>
    </mad-code-block>
    <mad-code-block title="lined" :code="MadInsetBorderUsageLinedCode">
      <mad-inset-border-usage-lined></mad-inset-border-usage-lined>
    </mad-code-block>
    <mad-code-block title="animated" :code="MadInsetBorderUsageAnimatedCode">
      <mad-inset-border-usage-animated></mad-inset-border-usage-animated>
    </mad-code-block>
    <mad-code-block title="group" :code="MadInsetBorderUsageGroupCode">
      <mad-inset-border-usage-group></mad-inset-border-usage-group>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/../website/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadInsetBorderUsageAnimated from '@/../website/patterns/inset-border/MadInsetBorderUsageAnimated'
import MadInsetBorderUsageAnimatedCode from '!raw-loader!@/../website/patterns/inset-border/MadInsetBorderUsageAnimated'
import MadInsetBorderUsageBasic from '@/../website/patterns/inset-border/MadInsetBorderUsageBasic'
import MadInsetBorderUsageBasicCode from '!raw-loader!@/../website/patterns/inset-border/MadInsetBorderUsageBasic'
import MadInsetBorderUsageGroup from '@/../website/patterns/inset-border/MadInsetBorderUsageGroup'
import MadInsetBorderUsageGroupCode from '!raw-loader!@/../website/patterns/inset-border/MadInsetBorderUsageGroup'
import MadInsetBorderUsageLined from '@/../website/patterns/inset-border/MadInsetBorderUsageLined'
import MadInsetBorderUsageLinedCode from '!raw-loader!@/../website/patterns/inset-border/MadInsetBorderUsageLined'

export default {
  name: 'IndexTemplate',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadInsetBorderUsageAnimated,
    MadInsetBorderUsageBasic,
    MadInsetBorderUsageGroup,
    MadInsetBorderUsageLined,
  },
  data() {
    return {
      MadInsetBorderUsageAnimatedCode,
      MadInsetBorderUsageBasicCode,
      MadInsetBorderUsageGroupCode,
      MadInsetBorderUsageLinedCode,
    }
  },
}
</script>

<style scoped></style>

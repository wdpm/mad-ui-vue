<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadProgressBarUsageBasicCode">
      <mad-progress-bar-usage-basic></mad-progress-bar-usage-basic>
    </mad-code-block>
    <mad-code-block title="color" :code="MadProgressBarUsageColorCode">
      <mad-progress-bar-usage-color></mad-progress-bar-usage-color>
    </mad-code-block>
    <mad-code-block
      title="Indeterminate"
      :code="MadProgressBarUsageIndeterminateCode"
    >
      <mad-progress-bar-usage-indeterminate></mad-progress-bar-usage-indeterminate>
    </mad-code-block>
    <mad-code-block title="size" :code="MadProgressBarUsageSizeCode">
      <mad-progress-bar-usage-size></mad-progress-bar-usage-size>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/../website/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadProgressBarUsageBasic from '@/../website/elements/progressbar/MadProgressBarUsageBasic'
import MadProgressBarUsageColor from '@/../website/elements/progressbar/MadProgressBarUsageColor'
import MadProgressBarUsageIndeterminate from '@/../website/elements/progressbar/MadProgressBarUsageIndeterminate'
import MadProgressBarUsageSize from '@/../website/elements/progressbar/MadProgressBarUsageSize'

import MadProgressBarUsageBasicCode from '!raw-loader!@/../website/elements/progressbar/MadProgressBarUsageBasic'
import MadProgressBarUsageColorCode from '!raw-loader!@/../website/elements/progressbar/MadProgressBarUsageColor'
import MadProgressBarUsageIndeterminateCode from '!raw-loader!@/../website/elements/progressbar/MadProgressBarUsageIndeterminate'
import MadProgressBarUsageSizeCode from '!raw-loader!@/../website/elements/progressbar/MadProgressBarUsageSize'

export default {
  name: 'MadProgressBarUsage',
  components: {
    MadDocPage,
    MadCodeBlock,
    MadProgressBarUsageBasic,
    MadProgressBarUsageColor,
    MadProgressBarUsageIndeterminate,
    MadProgressBarUsageSize,
  },
  data() {
    return {
      MadProgressBarUsageBasicCode,
      MadProgressBarUsageColorCode,
      MadProgressBarUsageIndeterminateCode,
      MadProgressBarUsageSizeCode,
    }
  },
}
</script>

<style scoped></style>

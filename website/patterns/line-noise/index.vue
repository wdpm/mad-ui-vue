<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadLineNoiseUsageBasicCode">
      <mad-line-noise-usage-basic></mad-line-noise-usage-basic>
    </mad-code-block>
    <mad-code-block title="direction" :code="MadLineNoiseUsageDirectionCode">
      <mad-line-noise-usage-direction></mad-line-noise-usage-direction>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/../website/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadLineNoiseUsageBasic from '@/../website/patterns/line-noise/MadLineNoiseUsageBasic'
import MadLineNoiseUsageBasicCode from '!raw-loader!@/../website/patterns/line-noise/MadLineNoiseUsageBasic'
import MadLineNoiseUsageDirection from '@/../website/patterns/line-noise/MadLineNoiseUsageDirection'
import MadLineNoiseUsageDirectionCode from '!raw-loader!@/../website/patterns/line-noise/MadLineNoiseUsageDirection'

export default {
  name: 'IndexTemplate',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadLineNoiseUsageBasic,
    MadLineNoiseUsageDirection,
  },
  data() {
    return {
      MadLineNoiseUsageBasicCode,
      MadLineNoiseUsageDirectionCode,
    }
  },
}
</script>

<style scoped></style>

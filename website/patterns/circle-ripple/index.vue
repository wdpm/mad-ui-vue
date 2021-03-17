<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadCircleRippleUsageBasicCode">
      <mad-circle-ripple-usage-basic></mad-circle-ripple-usage-basic>
    </mad-code-block>
    <mad-code-block title="custom" :code="MadCircleRippleUsageCustomCode">
      <mad-circle-ripple-usage-custom></mad-circle-ripple-usage-custom>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/../website/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadCircleRippleUsageBasic from '@/../website/patterns/circle-ripple/MadCircleRippleUsageBasic'
import MadCircleRippleUsageBasicCode from '!raw-loader!@/../website/patterns/circle-ripple/MadCircleRippleUsageBasic'
import MadCircleRippleUsageCustom from '@/../website/patterns/circle-ripple/MadCircleRippleUsageCustom'
import MadCircleRippleUsageCustomCode from '!raw-loader!@/../website/patterns/circle-ripple/MadCircleRippleUsageCustom'

export default {
  name: 'IndexTemplate',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadCircleRippleUsageBasic,
    MadCircleRippleUsageCustom,
  },
  data() {
    return {
      MadCircleRippleUsageBasicCode,
      MadCircleRippleUsageCustomCode,
    }
  },
}
</script>

<style scoped></style>

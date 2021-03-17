<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadCircularRippleUsageBasicCode">
      <mad-circular-ripple-usage-basic></mad-circular-ripple-usage-basic>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/../website/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadCircularRippleUsageBasic from '@/../website/plugins/circular-ripple/MadCircularRippleUsageBasic'
import MadCircularRippleUsageBasicCode from '!raw-loader!@/../website/plugins/circular-ripple/MadCircularRippleUsageBasic'

export default {
  name: 'IndexTemplate',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadCircularRippleUsageBasic,
  },
  data() {
    return {
      MadCircularRippleUsageBasicCode,
    }
  },
}
</script>

<style scoped></style>

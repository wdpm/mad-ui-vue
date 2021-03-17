<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadShieldUsageBasicCode">
      <mad-shield-usage-basic></mad-shield-usage-basic>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/../website/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadShieldUsageBasic from '@/../website/elements/shield/MadShieldUsageBasic'
import MadShieldUsageBasicCode from '!raw-loader!@/../website/elements/shield/MadShieldUsageBasic'

export default {
  name: 'IndexTemplate',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadShieldUsageBasic,
  },
  data() {
    return {
      MadShieldUsageBasicCode,
    }
  },
}
</script>
<style scoped></style>

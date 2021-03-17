<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadWaveUsageBasicCode">
      <mad-wave-usage-basic></mad-wave-usage-basic>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/../website/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadWaveUsageBasic from '@/../website/patterns/wave/MadWaveUsageBasic'
import MadWaveUsageBasicCode from '!raw-loader!@/../website/patterns/wave/MadWaveUsageBasic'

export default {
  name: 'IndexTemplate',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadWaveUsageBasic,
  },
  data() {
    return {
      MadWaveUsageBasicCode,
    }
  },
}
</script>

<style scoped></style>

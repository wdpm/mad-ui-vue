<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadSelectUsageBasicCode">
      <mad-select-usage-basic></mad-select-usage-basic>
    </mad-code-block>
    <mad-code-block title="size" :code="MadSelectUsageSizeCode">
      <mad-select-usage-size></mad-select-usage-size>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/../website/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadSelectUsageBasic from '@/../website/form/select/MadSelectUsageBasic'
import MadSelectUsageBasicCode from '!raw-loader!@/../website/form/select/MadSelectUsageBasic'

import MadSelectUsageSize from '@/../website/form/select/MadSelectUsageSize'
import MadSelectUsageSizeCode from '!raw-loader!@/../website/form/select/MadSelectUsageSize'

export default {
  name: 'IndexTemplate',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadSelectUsageBasic,
    MadSelectUsageSize,
  },
  data() {
    return {
      MadSelectUsageBasicCode,
      MadSelectUsageSizeCode,
    }
  },
}
</script>

<style scoped lang="scss"></style>

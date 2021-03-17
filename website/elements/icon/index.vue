<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadIconUsageBasicCode">
      <mad-icon-usage-basic></mad-icon-usage-basic>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/../website/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadIconUsageBasic from '@/../website/elements/icon/MadIconUsageBasic'
import MadIconUsageBasicCode from '!raw-loader!@/../website/elements/icon/MadIconUsageBasic'

export default {
  name: 'MadIconUsage',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadIconUsageBasic,
  },
  data() {
    return {
      MadIconUsageBasicCode,
    }
  },
}
</script>

<style scoped lang="scss"></style>

<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadMenuUsageBasicCode">
      <mad-menu-usage-basic></mad-menu-usage-basic>
    </mad-code-block>
    <mad-code-block title="size" :code="MadMenuUsageSizeCode">
      <mad-menu-usage-size></mad-menu-usage-size>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadMenuUsageBasic from '@/usages/components/menu/MadMenuUsageBasic'
import MadMenuUsageBasicCode from '!raw-loader!@/usages/components/menu/MadMenuUsageBasic'

import MadMenuUsageSize from '@/usages/components/menu/MadMenuUsageSize'
import MadMenuUsageSizeCode from '!raw-loader!@/usages/components/menu/MadMenuUsageSize'

export default {
  name: 'IndexTemplate',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadMenuUsageBasic,
    MadMenuUsageSize,
  },
  data() {
    return {
      MadMenuUsageBasicCode,
      MadMenuUsageSizeCode,
    }
  },
}
</script>

<style scoped></style>

<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadPaginationUsageBasicCode">
      <mad-pagination-usage-basic></mad-pagination-usage-basic>
    </mad-code-block>
    <mad-code-block title="size" :code="MadPaginationUsageSizeCode">
      <mad-pagination-usage-size></mad-pagination-usage-size>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/../website/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadPaginationUsageBasic from '@/../website/components/pagination/MadPaginationUsageBasic'
import MadPaginationUsageBasicCode from '!raw-loader!@/../website/components/pagination/MadPaginationUsageBasic'

import MadPaginationUsageSize from '@/../website/components/pagination/MadPaginationUsageSize'
import MadPaginationUsageSizeCode from '!raw-loader!@/../website/components/pagination/MadPaginationUsageSize'

export default {
  name: 'IndexTemplate',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadPaginationUsageBasic,
    MadPaginationUsageSize,
  },
  data() {
    return {
      MadPaginationUsageBasicCode,
      MadPaginationUsageSizeCode,
    }
  },
}
</script>

<style scoped></style>

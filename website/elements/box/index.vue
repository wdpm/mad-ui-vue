<template>
  <mad-doc-page>
    <mad-code-block :title="'basic'" :code="MadBoxUsageBasicCode">
      <mad-box-usage-basic></mad-box-usage-basic>
    </mad-code-block>
    <mad-code-block :title="'custom'" :code="MadBoxUsageCustomCode">
      <mad-box-usage-custom></mad-box-usage-custom>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadCodeBlock from '@/document/MadCodeBlock'
import MadDocPage from '@/../website/document/MadDocPage'

import MadBoxUsageBasic from '@/../website/elements/box/MadBoxUsageBasic'
import MadBoxUsageCustom from '@/../website/elements/box/MadBoxUsageCustom'

import MadBoxUsageBasicCode from '!raw-loader!@/../website/elements/box/MadBoxUsageBasic'
import MadBoxUsageCustomCode from '!raw-loader!@/../website/elements/box/MadBoxUsageCustom'

export default {
  name: 'MadBoxUsage',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadBoxUsageBasic,
    MadBoxUsageCustom,
  },
  data() {
    return {
      MadBoxUsageBasicCode,
      MadBoxUsageCustomCode,
    }
  },
}
</script>

<style scoped></style>

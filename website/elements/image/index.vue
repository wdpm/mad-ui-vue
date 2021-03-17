<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadImageUsageBasicCode">
      <mad-image-usage-basic></mad-image-usage-basic>
    </mad-code-block>
    <mad-code-block title="rounded" :code="MadImageUsageRoundedCode">
      <mad-image-usage-rounded></mad-image-usage-rounded>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/../website/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadImageUsageBasic from '@/../website/elements/image/MadImageUsageBasic'
import MadImageUsageRounded from '@/../website/elements/image/MadImageUsageRounded'

import MadImageUsageBasicCode from '!raw-loader!@/../website/elements/image/MadImageUsageBasic'
import MadImageUsageRoundedCode from '!raw-loader!@/../website/elements/image/MadImageUsageRounded'

export default {
  name: 'MadImageUsage',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadImageUsageBasic,
    MadImageUsageRounded,
  },
  data() {
    return {
      MadImageUsageBasicCode,
      MadImageUsageRoundedCode,
    }
  },
}
</script>

<style scoped lang="scss"></style>

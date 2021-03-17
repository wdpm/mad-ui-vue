<template>
  <mad-doc-page>
    <mad-code-block title="color" :code="MadTagUsageColorCode">
      <mad-tag-usage-color></mad-tag-usage-color>
    </mad-code-block>
    <mad-code-block title="size" :code="MadTagUsageSizeCode">
      <mad-tag-usage-size></mad-tag-usage-size>
    </mad-code-block>
    <mad-code-block title="skew corner" :code="MadTagUsageSkewCornerCode">
      <mad-tag-usage-skew-corner></mad-tag-usage-skew-corner>
    </mad-code-block>
    <mad-code-block title="title" :code="MadTagUsageTitleCode">
      <mad-tag-usage-title></mad-tag-usage-title>
    </mad-code-block>
    <mad-code-block title="combination" :code="MadTagUsageCombinationCode">
      <mad-tag-usage-combination></mad-tag-usage-combination>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/../website/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadTagUsageColor from '@/../website/elements/tag/MadTagUsageColor'
import MadTagUsageColorCode from '!raw-loader!@/../website/elements/tag/MadTagUsageColor'

import MadTagUsageCombination from '@/../website/elements/tag/MadTagUsageCombination'
import MadTagUsageCombinationCode from '!raw-loader!@/../website/elements/tag/MadTagUsageCombination'

import MadTagUsageSize from '@/../website/elements/tag/MadTagUsageSize'
import MadTagUsageSizeCode from '!raw-loader!@/../website/elements/tag/MadTagUsageSize'

import MadTagUsageSkewCorner from '@/../website/elements/tag/MadTagUsageSkewCorner'
import MadTagUsageSkewCornerCode from '!raw-loader!@/../website/elements/tag/MadTagUsageSkewCorner'

import MadTagUsageTitle from '@/../website/elements/tag/MadTagUsageTitle'
import MadTagUsageTitleCode from '!raw-loader!@/../website/elements/tag/MadTagUsageTitle'

export default {
  name: 'IndexTemplate',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadTagUsageColor,
    MadTagUsageCombination,
    MadTagUsageSize,
    MadTagUsageSkewCorner,
    MadTagUsageTitle,
  },
  data() {
    return {
      MadTagUsageColorCode,
      MadTagUsageCombinationCode,
      MadTagUsageSizeCode,
      MadTagUsageSkewCornerCode,
      MadTagUsageTitleCode,
    }
  },
}
</script>

<style scoped></style>

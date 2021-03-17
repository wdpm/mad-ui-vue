<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadTableUsageBasicCode">
      <mad-table-usage-basic></mad-table-usage-basic>
    </mad-code-block>
    <mad-code-block title="borderless" :code="MadTableUsageBorderlessCode">
      <mad-table-usage-borderless></mad-table-usage-borderless>
    </mad-code-block>
    <mad-code-block title="color" :code="MadTableUsageColorCode">
      <mad-table-usage-color></mad-table-usage-color>
    </mad-code-block>
    <mad-code-block title="fullwidth" :code="MadTableUsageFullwidthCode">
      <mad-table-usage-fullwidth></mad-table-usage-fullwidth>
    </mad-code-block>
    <mad-code-block
      title="horizontal lined"
      :code="MadTableUsageHorizontalLinedCode"
    >
      <mad-table-usage-horizontal-lined></mad-table-usage-horizontal-lined>
    </mad-code-block>
    <mad-code-block title="hoverable" :code="MadTableUsageHoverableCode">
      <mad-table-usage-hoverable></mad-table-usage-hoverable>
    </mad-code-block>
    <mad-code-block title="narrow" :code="MadTableUsageNarrowCode">
      <mad-table-usage-narrow></mad-table-usage-narrow>
    </mad-code-block>
    <mad-code-block title="striped" :code="MadTableUsageStripedCode">
      <mad-table-usage-striped></mad-table-usage-striped>
    </mad-code-block>
    <mad-code-block title="combination" :code="MadTableUsageCombinationCode">
      <mad-table-usage-combination></mad-table-usage-combination>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/../website/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadTableUsageBasic from '@/../website/elements/table/MadTableUsageBasic'
import MadTableUsageBasicCode from '!raw-loader!@/../website/elements/table/MadTableUsageBasic'

import MadTableUsageBorderless from '@/../website/elements/table/MadTableUsageBorderless'
import MadTableUsageBorderlessCode from '!raw-loader!@/../website/elements/table/MadTableUsageBorderless'

import MadTableUsageColor from '@/../website/elements/table/MadTableUsageColor'
import MadTableUsageColorCode from '!raw-loader!@/../website/elements/table/MadTableUsageColor'

import MadTableUsageCombination from '@/../website/elements/table/MadTableUsageCombination'
import MadTableUsageCombinationCode from '!raw-loader!@/../website/elements/table/MadTableUsageCombination'

import MadTableUsageFullwidth from '@/../website/elements/table/MadTableUsageFullwidth'
import MadTableUsageFullwidthCode from '!raw-loader!@/../website/elements/table/MadTableUsageFullwidth'

import MadTableUsageHorizontalLined from '@/../website/elements/table/MadTableUsageHorizontalLined'
import MadTableUsageHorizontalLinedCode from '!raw-loader!@/../website/elements/table/MadTableUsageHorizontalLined'

import MadTableUsageHoverable from '@/../website/elements/table/MadTableUsageHoverable'
import MadTableUsageHoverableCode from '!raw-loader!@/../website/elements/table/MadTableUsageHoverable'

import MadTableUsageNarrow from '@/../website/elements/table/MadTableUsageNarrow'
import MadTableUsageNarrowCode from '!raw-loader!@/../website/elements/table/MadTableUsageNarrow'

import MadTableUsageStriped from '@/../website/elements/table/MadTableUsageStriped'
import MadTableUsageStripedCode from '!raw-loader!@/../website/elements/table/MadTableUsageStriped'

export default {
  name: 'IndexTemplate',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadTableUsageBasic,
    MadTableUsageBorderless,
    MadTableUsageColor,
    MadTableUsageCombination,
    MadTableUsageFullwidth,
    MadTableUsageHorizontalLined,
    MadTableUsageHoverable,
    MadTableUsageNarrow,
    MadTableUsageStriped,
  },
  data() {
    return {
      MadTableUsageBasicCode,
      MadTableUsageBorderlessCode,
      MadTableUsageColorCode,
      MadTableUsageCombinationCode,
      MadTableUsageFullwidthCode,
      MadTableUsageHorizontalLinedCode,
      MadTableUsageHoverableCode,
      MadTableUsageNarrowCode,
      MadTableUsageStripedCode,
    }
  },
}
</script>

<style scoped></style>

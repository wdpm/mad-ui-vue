<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadColumnUsageBasicCode">
      <mad-column-usage-basic></mad-column-usage-basic>
    </mad-code-block>
    <mad-code-block title="breakpoint" :code="MadColumnUsageBreakpointCode">
      <mad-column-usage-breakpoint></mad-column-usage-breakpoint>
    </mad-code-block>
    <mad-code-block title="column gap" :code="MadColumnUsageColumnGapCode">
      <mad-column-usage-column-gap></mad-column-usage-column-gap>
    </mad-code-block>
    <mad-code-block title="fixed column" :code="MadColumnUsageFixedColumnCode">
      <mad-column-usage-fixed-column></mad-column-usage-fixed-column>
    </mad-code-block>
    <mad-code-block
      title="fixed percent"
      :code="MadColumnUsageFixedPercentCode"
    >
      <mad-column-usage-fixed-percent></mad-column-usage-fixed-percent>
    </mad-code-block>

    <mad-code-block title="offset" :code="MadColumnUsageOffsetCode">
      <mad-column-usage-offset></mad-column-usage-offset>
    </mad-code-block>
    <mad-code-block title="responsive" :code="MadColumnUsageResponsiveCode">
      <mad-column-usage-responsive></mad-column-usage-responsive>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadColumnUsageBasic from '@/usages/layout/column/MadColumnUsageBasic'
import MadColumnUsageBasicCode from '!raw-loader!@/usages/layout/column/MadColumnUsageBasic'

import MadColumnUsageBreakpoint from '@/usages/layout/column/MadColumnUsageBreakpoint'
import MadColumnUsageBreakpointCode from '!raw-loader!@/usages/layout/column/MadColumnUsageBreakpoint'

import MadColumnUsageColumnGap from '@/usages/layout/column/MadColumnUsageColumnGap'
import MadColumnUsageColumnGapCode from '!raw-loader!@/usages/layout/column/MadColumnUsageColumnGap'

import MadColumnUsageFixedColumn from '@/usages/layout/column/MadColumnUsageFixedColumn'
import MadColumnUsageFixedColumnCode from '!raw-loader!@/usages/layout/column/MadColumnUsageFixedColumn'

import MadColumnUsageFixedPercent from '@/usages/layout/column/MadColumnUsageFixedPercent'
import MadColumnUsageFixedPercentCode from '!raw-loader!@/usages/layout/column/MadColumnUsageFixedPercent'

import MadColumnUsageOffset from '@/usages/layout/column/MadColumnUsageOffset'
import MadColumnUsageOffsetCode from '!raw-loader!@/usages/layout/column/MadColumnUsageOffset'

import MadColumnUsageResponsive from '@/usages/layout/column/MadColumnUsageResponsive'
import MadColumnUsageResponsiveCode from '!raw-loader!@/usages/layout/column/MadColumnUsageResponsive'

export default {
  name: 'IndexTemplate',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadColumnUsageBasic,
    MadColumnUsageBreakpoint,
    MadColumnUsageColumnGap,
    MadColumnUsageFixedColumn,
    MadColumnUsageFixedPercent,
    MadColumnUsageOffset,
    MadColumnUsageResponsive,
  },
  data() {
    return {
      MadColumnUsageBasicCode,
      MadColumnUsageBreakpointCode,
      MadColumnUsageColumnGapCode,
      MadColumnUsageFixedColumnCode,
      MadColumnUsageFixedPercentCode,
      MadColumnUsageOffsetCode,
      MadColumnUsageResponsiveCode,
    }
  },
}
</script>

<style scoped></style>

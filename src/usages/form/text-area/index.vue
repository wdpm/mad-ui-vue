<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadTextAreaUsageBasicCode">
      <mad-text-area-usage-basic></mad-text-area-usage-basic>
    </mad-code-block>
    <mad-code-block title="semantic color" :code="MadTextAreaUsageColorCode">
      <mad-text-area-usage-color></mad-text-area-usage-color>
    </mad-code-block>
    <mad-code-block title="size" :code="MadTextAreaUsageSizeCode">
      <mad-text-area-usage-size></mad-text-area-usage-size>
    </mad-code-block>
    <mad-code-block title="readonly" :code="MadTextAreaUsageReadonlyCode">
      <mad-text-area-usage-readonly></mad-text-area-usage-readonly>
    </mad-code-block>
    <mad-code-block title="fixed size" :code="MadTextAreaUsageFixedSizeCode">
      <mad-text-area-usage-fixed-size></mad-text-area-usage-fixed-size>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadTextAreaUsageBasic from '@/usages/form/text-area/MadTextAreaUsageBasic'
import MadTextAreaUsageBasicCode from '!raw-loader!@/usages/form/text-area/MadTextAreaUsageBasic'

import MadTextAreaUsageColor from '@/usages/form/text-area/MadTextAreaUsageColor'
import MadTextAreaUsageColorCode from '!raw-loader!@/usages/form/text-area/MadTextAreaUsageColor'

import MadTextAreaUsageFixedSize from '@/usages/form/text-area/MadTextAreaUsageFixedSize'
import MadTextAreaUsageFixedSizeCode from '!raw-loader!@/usages/form/text-area/MadTextAreaUsageFixedSize'

import MadTextAreaUsageReadonly from '@/usages/form/text-area/MadTextAreaUsageReadonly'
import MadTextAreaUsageReadonlyCode from '!raw-loader!@/usages/form/text-area/MadTextAreaUsageReadonly'

import MadTextAreaUsageSize from '@/usages/form/text-area/MadTextAreaUsageSize'
import MadTextAreaUsageSizeCode from '!raw-loader!@/usages/form/text-area/MadTextAreaUsageSize'

export default {
  name: 'IndexTemplate',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadTextAreaUsageBasic,
    MadTextAreaUsageColor,
    MadTextAreaUsageFixedSize,
    MadTextAreaUsageReadonly,
    MadTextAreaUsageSize,
  },
  data() {
    return {
      MadTextAreaUsageBasicCode,
      MadTextAreaUsageColorCode,
      MadTextAreaUsageFixedSizeCode,
      MadTextAreaUsageReadonlyCode,
      MadTextAreaUsageSizeCode,
    }
  },
}
</script>

<style scoped></style>

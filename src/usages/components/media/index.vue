<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadMediaUsageBasicCode">
      <mad-media-usage-basic></mad-media-usage-basic>
    </mad-code-block>
    <mad-code-block
      title="figure on right"
      :code="MadMediaUsageFigureOnRightCode"
    >
      <mad-media-usage-figure-on-right></mad-media-usage-figure-on-right>
    </mad-code-block>
    <mad-code-block title="nested" :code="MadMediaUsageNestedCode">
      <mad-media-usage-nested></mad-media-usage-nested>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadMediaUsageBasic from '@/usages/components/media/MadMediaUsageBasic'
import MadMediaUsageBasicCode from '!raw-loader!@/usages/components/media/MadMediaUsageBasic'
import MadMediaUsageFigureOnRight from '@/usages/components/media/MadMediaUsageFigureOnRight'
import MadMediaUsageFigureOnRightCode from '!raw-loader!@/usages/components/media/MadMediaUsageFigureOnRight'
import MadMediaUsageNested from '@/usages/components/media/MadMediaUsageNested'
import MadMediaUsageNestedCode from '!raw-loader!@/usages/components/media/MadMediaUsageNested'

export default {
  name: 'IndexTemplate',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadMediaUsageBasic,
    MadMediaUsageFigureOnRight,
    MadMediaUsageNested,
  },
  data() {
    return {
      MadMediaUsageBasicCode,
      MadMediaUsageFigureOnRightCode,
      MadMediaUsageNestedCode,
    }
  },
}
</script>

<style scoped></style>

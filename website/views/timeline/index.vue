<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadTimelineUsageBasicCode">
      <mad-timeline-usage-basic></mad-timeline-usage-basic>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/../website/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadTimelineUsageBasic from '@/../website/views/timeline/MadTimelineUsageBasic'
import MadTimelineUsageBasicCode from '!raw-loader!@/../website/views/timeline/MadTimelineUsageBasic'

export default {
  name: 'IndexTemplate',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadTimelineUsageBasic,
  },
  data() {
    return {
      MadTimelineUsageBasicCode,
    }
  },
}
</script>

<style scoped></style>

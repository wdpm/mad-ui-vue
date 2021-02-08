<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadImageParallaxUsageBasicCode">
      <mad-image-parallax-usage-basic></mad-image-parallax-usage-basic>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadImageParallaxUsageBasic from '@/usages/patterns/image-parallax/MadImageParallaxUsageBasic'
import MadImageParallaxUsageBasicCode from '!raw-loader!@/usages/patterns/image-parallax/MadImageParallaxUsageBasic'

export default {
  name: 'IndexTemplate',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadImageParallaxUsageBasic,
  },
  data() {
    return {
      MadImageParallaxUsageBasicCode,
    }
  },
}
</script>

<style scoped></style>

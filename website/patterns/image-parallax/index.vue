<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadImageParallaxUsageBasicCode">
      <mad-image-parallax-usage-basic></mad-image-parallax-usage-basic>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/../website/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadImageParallaxUsageBasic from '@/../website/patterns/image-parallax/MadImageParallaxUsageBasic'
import MadImageParallaxUsageBasicCode from '!raw-loader!@/../website/patterns/image-parallax/MadImageParallaxUsageBasic'

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

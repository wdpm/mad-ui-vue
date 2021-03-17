<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadRevealImageUsageBasicCode">
      <mad-reveal-image-usage-basic></mad-reveal-image-usage-basic>
    </mad-code-block>
    <mad-code-block title="custom" :code="MadRevealImageUsageCustomCode">
      <mad-reveal-image-usage-custom></mad-reveal-image-usage-custom>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/../website/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadRevealImageUsageBasic from '@/../website/patterns/reveal-image/MadRevealImageUsageBasic'
import MadRevealImageUsageBasicCode from '!raw-loader!@/../website/patterns/reveal-image/MadRevealImageUsageBasic'
import MadRevealImageUsageCustom from '@/../website/patterns/reveal-image/MadRevealImageUsageCustom'
import MadRevealImageUsageCustomCode from '!raw-loader!@/../website/patterns/reveal-image/MadRevealImageUsageCustom'

export default {
  name: 'IndexTemplate',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadRevealImageUsageBasic,
    MadRevealImageUsageCustom,
  },
  data() {
    return {
      MadRevealImageUsageBasicCode,
      MadRevealImageUsageCustomCode,
    }
  },
}
</script>

<style scoped></style>

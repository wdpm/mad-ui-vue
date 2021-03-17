<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadOrbitSpinnerUsageBasicCode">
      <mad-orbit-spinner-usage-basic></mad-orbit-spinner-usage-basic>
    </mad-code-block>
    <mad-code-block title="single" :code="MadOrbitSpinnerUsageSingleCode">
      <mad-orbit-spinner-usage-single></mad-orbit-spinner-usage-single>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/../website/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadOrbitSpinnerUsageBasic from '@/../website/elements/spinner/MadOrbitSpinnerUsageBasic'
import MadOrbitSpinnerUsageBasicCode from '!raw-loader!@/../website/elements/spinner/MadOrbitSpinnerUsageBasic'
import MadOrbitSpinnerUsageSingle from '@/../website/elements/spinner/MadOrbitSpinnerUsageSingle'
import MadOrbitSpinnerUsageSingleCode from '!raw-loader!@/../website/elements/spinner/MadOrbitSpinnerUsageSingle'

export default {
  name: 'IndexTemplate',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadOrbitSpinnerUsageBasic,
    MadOrbitSpinnerUsageSingle,
  },
  data() {
    return {
      MadOrbitSpinnerUsageBasicCode,
      MadOrbitSpinnerUsageSingleCode,
    }
  },
}
</script>

<style scoped></style>

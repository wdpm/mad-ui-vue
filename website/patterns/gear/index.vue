<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadGearUsageBasicCode">
      <mad-gear-usage-basic></mad-gear-usage-basic>
    </mad-code-block>
    <mad-code-block title="custom" :code="MadGearUsageCustomCode">
      <mad-gear-usage-custom></mad-gear-usage-custom>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/../website/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadGearUsageBasic from '@/../website/patterns/gear/MadGearUsageBasic'
import MadGearUsageBasicCode from '!raw-loader!@/../website/patterns/gear/MadGearUsageBasic'
import MadGearUsageCustom from '@/../website/patterns/gear/MadGearUsageCustom'
import MadGearUsageCustomCode from '!raw-loader!@/../website/patterns/gear/MadGearUsageCustom'

export default {
  name: 'IndexTemplate',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadGearUsageBasic,
    MadGearUsageCustom,
  },
  data() {
    return {
      MadGearUsageBasicCode,
      MadGearUsageCustomCode,
    }
  },
}
</script>

<style scoped></style>

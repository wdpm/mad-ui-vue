<template>
  <div id="input-doc-container">
    <mad-doc-page>
      <mad-code-block title="basic" :code="MadInputUsageBasicCode">
        <mad-input-usage-basic></mad-input-usage-basic>
      </mad-code-block>
      <mad-code-block title="color" :code="MadInputUsageColorCode">
        <mad-input-usage-color></mad-input-usage-color>
      </mad-code-block>
      <mad-code-block title="size" :code="MadInputUsageSizeCode">
        <mad-input-usage-size></mad-input-usage-size>
      </mad-code-block>
    </mad-doc-page>
  </div>
</template>

<script>
import MadDocPage from '@/../website/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadInputUsageBasic from '@/../website/form/input/MadInputUsageBasic'
import MadInputUsageBasicCode from '!raw-loader!@/../website/form/input/MadInputUsageBasic'

import MadInputUsageColor from '@/../website/form/input/MadInputUsageColor'
import MadInputUsageColorCode from '!raw-loader!@/../website/form/input/MadInputUsageColor'

import MadInputUsageSize from '@/../website/form/input/MadInputUsageSize'
import MadInputUsageSizeCode from '!raw-loader!@/../website/form/input/MadInputUsageSize'

export default {
  name: 'IndexTemplate',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadInputUsageBasic,
    MadInputUsageColor,
    MadInputUsageSize,
  },
  data() {
    return {
      MadInputUsageBasicCode,
      MadInputUsageColorCode,
      MadInputUsageSizeCode,
    }
  },
}
</script>

<style lang="scss">
#input-doc-container input {
  display: block;
  margin-bottom: 0.5rem !important;
}
</style>

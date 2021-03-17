<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadAlertUsageBasicCode">
      <mad-alert-usage-basic></mad-alert-usage-basic>
    </mad-code-block>
    <mad-code-block title="colors" :code="MadAlertUsageColorsCode">
      <mad-alert-usage-colors></mad-alert-usage-colors>
    </mad-code-block>
    <mad-code-block title="custom" :code="MadAlertUsageCustomCode">
      <mad-alert-usage-custom></mad-alert-usage-custom>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadCodeBlock from '@/document/MadCodeBlock'
import MadDocPage from '@/../website/document/MadDocPage'

import MadAlertUsageBasic from '@/../website/elements/alert/MadAlertUsageBasic'
import MadAlertUsageColors from '@/../website/elements/alert/MadAlertUsageColors'
import MadAlertUsageCustom from '@/../website/elements/alert/MadAlertUsageCustom'

import MadAlertUsageBasicCode from '!raw-loader!@/../website/elements/alert/MadAlertUsageBasic'
import MadAlertUsageColorsCode from '!raw-loader!@/../website/elements/alert/MadAlertUsageColors'
import MadAlertUsageCustomCode from '!raw-loader!@/../website/elements/alert/MadAlertUsageCustom'

export default {
  name: 'MadAlertUsage',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadAlertUsageBasic,
    MadAlertUsageColors,
    MadAlertUsageCustom,
  },
  data() {
    return {
      MadAlertUsageBasicCode,
      MadAlertUsageColorsCode,
      MadAlertUsageCustomCode,
    }
  },
}
</script>

<style scoped></style>

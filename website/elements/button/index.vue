<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadButtonUsageBasicCode">
      <mad-button-usage-basic></mad-button-usage-basic>
    </mad-code-block>
    <mad-code-block title="size" :code="MadButtonUsageSizeCode">
      <mad-button-usage-size></mad-button-usage-size>
    </mad-code-block>
    <mad-code-block title="color" :code="MadButtonUsageColorCode">
      <mad-button-usage-color></mad-button-usage-color>
    </mad-code-block>
    <mad-code-block title="light" :code="MadButtonUsageLightCode">
      <mad-button-usage-light></mad-button-usage-light>
    </mad-code-block>
    <mad-code-block title="fullwidth" :code="MadButtonUsageFullwidthCode">
      <mad-button-usage-fullwidth></mad-button-usage-fullwidth>
    </mad-code-block>
    <mad-code-block title="outlined" :code="MadButtonUsageOutlinedCode">
      <mad-button-usage-outlined></mad-button-usage-outlined>
    </mad-code-block>
    <mad-code-block title="rounded" :code="MadButtonUsageRoundedCode">
      <mad-button-usage-rounded></mad-button-usage-rounded>
    </mad-code-block>
    <mad-code-block title="disabled" :code="MadButtonUsageDisabledCode">
      <mad-button-usage-disabled></mad-button-usage-disabled>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadCodeBlock from '@/document/MadCodeBlock'
import MadDocPage from '@/../website/document/MadDocPage'

import MadButtonUsageBasic from '@/../website/elements/button/MadButtonUsageBasic'
import MadButtonUsageBasicCode from '!raw-loader!@/../website/elements/button/MadButtonUsageBasic'

import MadButtonUsageSize from '@/../website/elements/button/MadButtonUsageSize'
import MadButtonUsageSizeCode from '!raw-loader!@/../website/elements/button/MadButtonUsageSize'

import MadButtonUsageColor from '@/../website/elements/button/MadButtonUsageColor'
import MadButtonUsageColorCode from '!raw-loader!@/../website/elements/button/MadButtonUsageColor'

import MadButtonUsageLight from '@/../website/elements/button/MadButtonUsageLight'
import MadButtonUsageLightCode from '!raw-loader!@/../website/elements/button/MadButtonUsageLight'

import MadButtonUsageFullwidth from '@/../website/elements/button/MadButtonUsageFullwidth'
import MadButtonUsageFullwidthCode from '!raw-loader!@/../website/elements/button/MadButtonUsageFullwidth'

import MadButtonUsageOutlined from '@/../website/elements/button/MadButtonUsageOutlined'
import MadButtonUsageOutlinedCode from '!raw-loader!@/../website/elements/button/MadButtonUsageOutlined'

import MadButtonUsageRounded from '@/../website/elements/button/MadButtonUsageRounded'
import MadButtonUsageRoundedCode from '!raw-loader!@/../website/elements/button/MadButtonUsageRounded'

import MadButtonUsageDisabled from '@/../website/elements/button/MadButtonUsageDisabled'
import MadButtonUsageDisabledCode from '!raw-loader!@/../website/elements/button/MadButtonUsageDisabled'

export default {
  name: 'MadButtonUsage',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadButtonUsageBasic,
    MadButtonUsageSize,
    MadButtonUsageColor,
    MadButtonUsageLight,
    MadButtonUsageFullwidth,
    MadButtonUsageOutlined,
    MadButtonUsageRounded,
    MadButtonUsageDisabled,
  },
  data() {
    return {
      MadButtonUsageBasicCode,
      MadButtonUsageSizeCode,
      MadButtonUsageColorCode,
      MadButtonUsageLightCode,
      MadButtonUsageFullwidthCode,
      MadButtonUsageOutlinedCode,
      MadButtonUsageRoundedCode,
      MadButtonUsageDisabledCode,
    }
  },
}
</script>

<style scoped></style>

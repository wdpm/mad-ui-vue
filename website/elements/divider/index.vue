<template>
  <mad-doc-page>
    <mad-code-block title="基本用法" :code="MadDividerUsageBasicCode">
      <mad-divider-usage-basic></mad-divider-usage-basic>
      <template v-slot:desc>
        <div><p>只是一条分割线。</p></div>
      </template>
    </mad-code-block>

    <mad-code-block title="带标题的分割线" :code="MadDividerUsageLabelCode">
      <mad-divider-usage-label></mad-divider-usage-label>
      <template v-slot:desc>
        <div>
          <p>
            你可以传入`align`改变标题的位置，支持的值有：`left`、`center`、`right`。
          </p>
        </div>
      </template>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/../website/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadDividerUsageLabel from '@/../website/elements/divider/MadDividerUsageLabel'
import MadDividerUsageBasic from '@/../website/elements/divider/MadDividerUsageBasic'

import MadDividerUsageBasicCode from '!raw-loader!@/../website/elements/divider/MadDividerUsageBasic'
import MadDividerUsageLabelCode from '!raw-loader!@/../website/elements/divider/MadDividerUsageLabel'

export default {
  name: 'MadDividerUsage',
  components: {
    MadDividerUsageLabel,
    MadDividerUsageBasic,
    MadCodeBlock,
    MadDocPage,
  },
  data() {
    return {
      MadDividerUsageBasicCode,
      MadDividerUsageLabelCode,
    }
  },
}
</script>

<style scoped lang="scss"></style>

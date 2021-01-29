<template>
  <mad-doc-page>
    <mad-code-block title="基本用法" :code="MadDividerUsageSimpleCode">
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
import MadCodeBlock from '@/document/MadCodeBlock'

import MadDividerUsageLabel from '@/usages/elements/divider/MadDividerUsageLabel'
import MadDividerUsageBasic from '@/usages/elements/divider/MadDividerUsageBasic'

import MadDividerUsageBasicCode from '!raw-loader!@/usages/elements/divider/MadDividerUsageBasic'
import MadDividerUsageLabelCode from '!raw-loader!@/usages/elements/divider/MadDividerUsageLabel'
import MadDocPage from '@/document/MadDocPage'

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

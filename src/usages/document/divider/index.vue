<template>
  <mad-code-block title="基本用法" :code="simpleCode">
    <simple-demo></simple-demo>
    <template v-slot:desc>
      <div><p>只是一条分割线。</p></div>
    </template>
  </mad-code-block>

  <mad-code-block title="带标题的分割线" :code="labelCode">
    <label-demo></label-demo>
    <template v-slot:desc>
      <div>
        <p>
          你可以传入`align`改变标题的位置，支持的值有：`left`、`center`、`right`。
        </p>
      </div>
    </template>
  </mad-code-block>
</template>

<script>
import MadCodeBlock from '@/document/MadCodeBlock'

import labelDemo from '@/usages/document/divider/label'
import simpleDemo from '@/usages/document/divider/simple'

import simpleCode from '!raw-loader!@/usages/document/divider/simple'
import labelCode from '!raw-loader!@/usages/document/divider/label'

export default {
  name: 'MadDividerDemo',
  components: {
    labelDemo,
    simpleDemo,
    MadCodeBlock,
  },
  data() {
    return {
      simpleCode,
      labelCode,
    }
  },
}
</script>

<style scoped lang="scss"></style>

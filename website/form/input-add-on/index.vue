<template>
  <mad-doc-page>
    <mad-code-block title="append" :code="MadInputAddOnUsageAppendCode">
      <mad-input-add-on-usage-append></mad-input-add-on-usage-append>
    </mad-code-block>
    <mad-code-block title="prepend" :code="MadInputAddOnUsagePrependCode">
      <mad-input-add-on-usage-prepend></mad-input-add-on-usage-prepend>
    </mad-code-block>
    <mad-code-block title="both" :code="MadInputAddOnUsageBothCode">
      <mad-input-add-on-usage-both></mad-input-add-on-usage-both>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/../website/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadInputAddOnUsageAppend from '@/../website/form/input-add-on/MadInputAddOnUsageAppend'
import MadInputAddOnUsageAppendCode from '!raw-loader!@/../website/form/input-add-on/MadInputAddOnUsageAppend'

import MadInputAddOnUsageBoth from '@/../website/form/input-add-on/MadInputAddOnUsageBoth'
import MadInputAddOnUsageBothCode from '!raw-loader!@/../website/form/input-add-on/MadInputAddOnUsageBoth'

import MadInputAddOnUsagePrepend from '@/../website/form/input-add-on/MadInputAddOnUsagePrepend'
import MadInputAddOnUsagePrependCode from '!raw-loader!@/../website/form/input-add-on/MadInputAddOnUsagePrepend'

export default {
  name: 'IndexTemplate',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadInputAddOnUsageAppend,
    MadInputAddOnUsageBoth,
    MadInputAddOnUsagePrepend,
  },
  data() {
    return {
      MadInputAddOnUsageAppendCode,
      MadInputAddOnUsageBothCode,
      MadInputAddOnUsagePrependCode,
    }
  },
}
</script>

<style scoped></style>

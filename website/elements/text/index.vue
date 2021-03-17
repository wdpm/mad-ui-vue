<template>
  <mad-doc-page>
    <mad-code-block title="quotation mark" :code="MadTextUsageQuotationCode">
      <mad-text-usage-quotation></mad-text-usage-quotation>
    </mad-code-block>
    <mad-code-block title="afterimage" :code="MadTextUsageAfterimageCode">
      <mad-text-usage-afterimage></mad-text-usage-afterimage>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/../website/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadTextUsageAfterimage from '@/../website/elements/text/MadTextUsageAfterimage'
import MadTextUsageAfterimageCode from '!raw-loader!@/../website/elements/text/MadTextUsageAfterimage'
import MadTextUsageQuotation from '@/../website/elements/text/MadTextUsageQuotation'
import MadTextUsageQuotationCode from '!raw-loader!@/../website/elements/text/MadTextUsageQuotation'
import MadText from "@/elements/MadText";

export default {
  name: 'IndexTemplate',
  components: {
    MadText,
    MadCodeBlock,
    MadDocPage,
    MadTextUsageAfterimage,
    MadTextUsageQuotation,
  },
  data() {
    return {
      MadTextUsageAfterimageCode,
      MadTextUsageQuotationCode,
    }
  },
}
</script>

<style scoped></style>

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
import MadDocPage from '@/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadTextUsageAfterimage from '@/usages/elements/text/MadTextUsageAfterimage'
import MadTextUsageAfterimageCode from '!raw-loader!@/usages/elements/text/MadTextUsageAfterimage'
import MadTextUsageQuotation from '@/usages/elements/text/MadTextUsageQuotation'
import MadTextUsageQuotationCode from '!raw-loader!@/usages/elements/text/MadTextUsageQuotation'
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

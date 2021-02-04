<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadContainerUsageBasicCode">
      <mad-container-usage-basic></mad-container-usage-basic>
    </mad-code-block>
    <mad-code-block title="fluid" :code="MadContainerUsageFluidCode">
      <mad-container-usage-fluid></mad-container-usage-fluid>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadContainerUsageBasic from '@/usages/layout/container/MadContainerUsageBasic'
import MadContainerUsageBasicCode from '!raw-loader!@/usages/layout/container/MadContainerUsageBasic'
import MadContainerUsageFluid from '@/usages/layout/container/MadContainerUsageFluid'
import MadContainerUsageFluidCode from '!raw-loader!@/usages/layout/container/MadContainerUsageFluid'

export default {
  name: 'IndexTemplate',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadContainerUsageBasic,
    MadContainerUsageFluid,
  },
  data() {
    return {
      MadContainerUsageBasicCode,
      MadContainerUsageFluidCode,
    }
  },
}
</script>

<style scoped></style>

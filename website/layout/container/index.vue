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
import MadDocPage from '@/../website/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadContainerUsageBasic from '@/../website/layout/container/MadContainerUsageBasic'
import MadContainerUsageBasicCode from '!raw-loader!@/../website/layout/container/MadContainerUsageBasic'
import MadContainerUsageFluid from '@/../website/layout/container/MadContainerUsageFluid'
import MadContainerUsageFluidCode from '!raw-loader!@/../website/layout/container/MadContainerUsageFluid'

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

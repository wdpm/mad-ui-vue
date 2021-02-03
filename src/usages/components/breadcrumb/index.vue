<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadBreadcrumbUsageBasicCode">
      <mad-breadcrumb-usage-basic></mad-breadcrumb-usage-basic>
    </mad-code-block>
    <mad-code-block title="alignment" :code="MadBreadcrumbUsageAlignmentCode">
      <mad-breadcrumb-usage-alignment></mad-breadcrumb-usage-alignment>
    </mad-code-block>
    <mad-code-block title="size" :code="MadBreadcrumbUsageSizeCode">
      <mad-breadcrumb-usage-size></mad-breadcrumb-usage-size>
    </mad-code-block>
    <mad-code-block title="separator" :code="MadBreadcrumbUsageSeparatorCode">
      <mad-breadcrumb-usage-separator></mad-breadcrumb-usage-separator>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadBreadcrumbUsageAlignment from '@/usages/components/breadcrumb/MadBreadcrumbUsageAlignment'
import MadBreadcrumbUsageAlignmentCode from '!raw-loader!@/usages/components/breadcrumb/MadBreadcrumbUsageAlignment'

import MadBreadcrumbUsageBasic from '@/usages/components/breadcrumb/MadBreadcrumbUsageBasic'
import MadBreadcrumbUsageBasicCode from '!raw-loader!@/usages/components/breadcrumb/MadBreadcrumbUsageBasic'

import MadBreadcrumbUsageSeparator from '@/usages/components/breadcrumb/MadBreadcrumbUsageSeparator'
import MadBreadcrumbUsageSeparatorCode from '!raw-loader!@/usages/components/breadcrumb/MadBreadcrumbUsageSeparator'

import MadBreadcrumbUsageSize from '@/usages/components/breadcrumb/MadBreadcrumbUsageSize'
import MadBreadcrumbUsageSizeCode from '!raw-loader!@/usages/components/breadcrumb/MadBreadcrumbUsageSize'

export default {
  name: 'IndexTemplate',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadBreadcrumbUsageAlignment,
    MadBreadcrumbUsageBasic,
    MadBreadcrumbUsageSeparator,
    MadBreadcrumbUsageSize,
  },
  data() {
    return {
      MadBreadcrumbUsageAlignmentCode,
      MadBreadcrumbUsageBasicCode,
      MadBreadcrumbUsageSeparatorCode,
      MadBreadcrumbUsageSizeCode,
    }
  },
}
</script>

<style scoped></style>

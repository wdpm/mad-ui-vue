<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadDropdownUsageBasicCode">
      <mad-dropdown-usage-basic></mad-dropdown-usage-basic>
    </mad-code-block>
    <mad-code-block title="alignment" :code="MadDropdownUsageAlignmentCode">
      <mad-dropdown-usage-alignment></mad-dropdown-usage-alignment>
    </mad-code-block>
    <mad-code-block title="control" :code="MadDropdownUsageControlCode">
      <mad-dropdown-usage-control></mad-dropdown-usage-control>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/../website/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadDropdownUsageAlignment from '@/../website/components/dropdown/MadDropdownUsageAlignment'
import MadDropdownUsageAlignmentCode from '!raw-loader!@/../website/components/dropdown/MadDropdownUsageAlignment'

import MadDropdownUsageBasic from '@/../website/components/dropdown/MadDropdownUsageBasic'
import MadDropdownUsageBasicCode from '!raw-loader!@/../website/components/dropdown/MadDropdownUsageBasic'

import MadDropdownUsageControl from '@/../website/components/dropdown/MadDropdownUsageControl'
import MadDropdownUsageControlCode from '!raw-loader!@/../website/components/dropdown/MadDropdownUsageControl'

export default {
  name: 'IndexTemplate',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadDropdownUsageAlignment,
    MadDropdownUsageBasic,
    MadDropdownUsageControl,
  },
  data() {
    return {
      MadDropdownUsageAlignmentCode,
      MadDropdownUsageBasicCode,
      MadDropdownUsageControlCode,
    }
  },
}
</script>

<style scoped></style>

<template>
  <mad-doc-page>
    <mad-code-block title="basic" :code="MadNotificationUsageBasicCode">
      <mad-notification-usage-basic></mad-notification-usage-basic>
    </mad-code-block>
    <mad-code-block title="color" :code="MadNotificationUsageColorCode">
      <mad-notification-usage-color></mad-notification-usage-color>
    </mad-code-block>
    <mad-code-block title="dark" :code="MadNotificationUsageDarkCode">
      <mad-notification-usage-dark></mad-notification-usage-dark>
    </mad-code-block>
    <mad-code-block title="light" :code="MadNotificationUsageLightCode">
      <mad-notification-usage-light></mad-notification-usage-light>
    </mad-code-block>
  </mad-doc-page>
</template>

<script>
import MadDocPage from '@/../website/document/MadDocPage'
import MadCodeBlock from '@/document/MadCodeBlock'

import MadNotificationUsageBasic from '@/../website/elements/notification/MadNotificationUsageBasic'
import MadNotificationUsageColor from '@/../website/elements/notification/MadNotificationUsageColor'
import MadNotificationUsageDark from '@/../website/elements/notification/MadNotificationUsageDark'
import MadNotificationUsageLight from '@/../website/elements/notification/MadNotificationUsageLight'

import MadNotificationUsageBasicCode from '!raw-loader!@/../website/elements/notification/MadNotificationUsageBasic'
import MadNotificationUsageColorCode from '!raw-loader!@/../website/elements/notification/MadNotificationUsageColor'
import MadNotificationUsageDarkCode from '!raw-loader!@/../website/elements/notification/MadNotificationUsageDark'
import MadNotificationUsageLightCode from '!raw-loader!@/../website/elements/notification/MadNotificationUsageLight'

export default {
  name: 'MadNotificationUsage',
  components: {
    MadCodeBlock,
    MadDocPage,
    MadNotificationUsageBasic,
    MadNotificationUsageColor,
    MadNotificationUsageDark,
    MadNotificationUsageLight,
  },
  data() {
    return {
      MadNotificationUsageBasicCode,
      MadNotificationUsageColorCode,
      MadNotificationUsageDarkCode,
      MadNotificationUsageLightCode,
    }
  },
}
</script>

<style scoped lang="scss"></style>

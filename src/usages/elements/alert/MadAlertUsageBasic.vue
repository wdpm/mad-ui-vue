<template>
  <!-- default no title and no type-->
  <mad-alert :content="'default content'"></mad-alert>
</template>

<script>
import MadAlert from '@/elements/MadAlert'

export default {
  name: 'MadAlertUsageBasic',
  components: {
    MadAlert,
  },
}
</script>

<style scoped></style>

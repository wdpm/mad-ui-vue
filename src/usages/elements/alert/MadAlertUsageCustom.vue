<template>
  <!-- custom -->
  <mad-alert
    :type="'warning'"
    :title="'custom title'"
    :content="'Provide information that users should be aware of as there is a low to moderate'"
  ></mad-alert>
</template>

<script>
import MadAlert from "@/elements/MadAlert"

export default {
  name: 'MadAlertUsageCustom',
  components: {
    MadAlert,
  },
}
</script>

<style scoped></style>

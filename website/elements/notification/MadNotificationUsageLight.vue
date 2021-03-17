<template>
  <mad-notification :color="'primary'" light>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
  </mad-notification>
  <mad-notification :color="'info'" light>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
  </mad-notification>
  <mad-notification :color="'success'" light>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
  </mad-notification>
  <mad-notification :color="'warning'" light>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
  </mad-notification>
  <mad-notification :color="'danger'" light>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
  </mad-notification>
</template>

<script>
import MadNotification from '@/elements/MadNotification'

export default {
  name: 'MadNotificationUsageLight',
  components: {
    MadNotification,
  },
}
</script>

<style scoped></style>

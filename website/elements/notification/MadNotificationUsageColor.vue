<template>
  <mad-notification :color="'white'">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
  </mad-notification>
  <mad-notification :color="'black'">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
  </mad-notification>
  <mad-notification :color="'light'">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
  </mad-notification>
  <mad-notification :color="'dark'">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
  </mad-notification>
  <mad-notification :color="'primary'">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
  </mad-notification>
  <mad-notification :color="'info'">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
  </mad-notification>
  <mad-notification :color="'success'">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
  </mad-notification>
  <mad-notification :color="'warning'">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
  </mad-notification>
  <mad-notification :color="'danger'">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
  </mad-notification>
</template>

<script>
import MadNotification from '@/elements/MadNotification'

export default {
  name: 'MadNotificationUsageColor',
  components: {
    MadNotification,
  },
}
</script>

<style scoped></style>

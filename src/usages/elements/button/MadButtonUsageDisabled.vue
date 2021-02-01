<template>
  <mad-button disabled>disabled</mad-button>
  <mad-button :color="'danger'" disabled>danger disabled</mad-button>
  <mad-button :color="'success'" disabled>success disabled</mad-button>
</template>

<script>
import MadButton from '@/elements/MadButton'

export default {
  name: 'MadButtonUsageDisabled',
  components: {
    MadButton,
  },
}
</script>

<style scoped></style>

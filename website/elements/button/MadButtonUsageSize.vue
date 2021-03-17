<template>
  <mad-button :size="'small'">small</mad-button>
  <mad-button :size="''">normal</mad-button>
  <mad-button :size="'medium'">medium</mad-button>
  <mad-button :size="'large'">large</mad-button>
</template>

<script>
import MadButton from '@/elements/MadButton'

export default {
  name: 'MadButtonUsageSize',
  components: {
    MadButton,
  },
}
</script>

<style scoped></style>

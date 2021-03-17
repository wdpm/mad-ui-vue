<template>
  <mad-button fullwidth :size="'small'">small fullwidth</mad-button>
  <mad-button fullwidth :size="'large'">large fullwidth</mad-button>
</template>

<script>
import MadButton from '@/elements/MadButton'

export default {
  name: 'MadButtonUsageFullwidth',
  components: {
    MadButton,
  },
}
</script>

<style scoped></style>

<template>
  <mad-button :tag="'a'" disabled>a disabled</mad-button>
  <mad-button :tag="'a'">a</mad-button>
  <mad-button :tag="'input'" type="submit" value="submit button"></mad-button>
</template>

<script>
import MadButton from '@/elements/MadButton'

export default {
  name: 'MadButtonUsageBasic',
  components: {
    MadButton,
  },
}
</script>

<style scoped></style>

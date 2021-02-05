<template>
  <mad-letter-box
    :src="require('@/assets/2.jpg').default"
    bottom-text="bottom-text"
    top-text="top-text"
  ></mad-letter-box>
</template>

<script>
import MadLetterBox from '@/patterns/MadLetterBox'

export default {
  name: 'MadLetterBoxUsageBasic',
  components: {
    MadLetterBox,
  },
}
</script>

<style scoped></style>

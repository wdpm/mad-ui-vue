<template>
  <h2>basic</h2>
  <mad-letter-box
    :src="require('@/assets/2.jpg').default"
    bottom-text="bottom-text"
    top-text="top-text"
  ></mad-letter-box>
</template>

<script>
import MadLetterBox from '@/patterns/MadLetterBox'

export default {
  name: 'MadLetterBoxDemo',
  components: {
    MadLetterBox,
  },
}
</script>

<style scoped></style>

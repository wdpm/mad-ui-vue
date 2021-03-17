<template>
  <mad-image
    rounded
    :ratio="'1by1'"
    :width="'50px'"
    :src="'https://via.placeholder.com/128x128'"
  ></mad-image>
</template>

<script>
import MadImage from '@/elements/MadImage.vue'

export default {
  name: 'MadImageUsageRounded',
  components: {
    MadImage,
  },
}
</script>

<style scoped></style>

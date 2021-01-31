<template>
  <!--you should know original image respect ratio, set ratio and set fixed width-->
  <mad-image
    :src="'https://cdn.vuetifyjs.com/images/parallax/material.jpg'"
    :size="'16by9'"
    :width="'300px'"
  ></mad-image>
  <hr />
  <!-- if set fixed height-->
  <mad-image
    :src="'https://cdn.vuetifyjs.com/images/parallax/material.jpg'"
    :size="'16by9'"
    :height="'200px'"
  ></mad-image>
  <!-- if set fixed height and max-width-->
  <mad-image
    :src="'https://cdn.vuetifyjs.com/images/parallax/material.jpg'"
    :size="'16by9'"
    :height="'180px'"
    :max-width="'400px'"
  ></mad-image>
  <mad-image
    is-rounded
    :size="'1by1'"
    :width="'50px'"
    :src="'https://bulma.io/images/placeholders/128x128.png'"
  ></mad-image>
</template>

<script>
import MadImage from '@/elements/MadImage.vue'

export default {
  name: 'MadImageDemo',
  components: {
    MadImage,
  },
}
</script>

<style scoped></style>

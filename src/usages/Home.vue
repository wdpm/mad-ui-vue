<template>
  <p>Home page</p>
  <mad-image-parallax></mad-image-parallax>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import MadImageParallax from '@/patterns/MadImageParallax.vue'

@Options({
  components: {
    MadImageParallax,
  },
})
export default class Home extends Vue {}
</script>

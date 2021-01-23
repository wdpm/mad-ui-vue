<template>
  <div class="home">home</div>
  <mad-image-cross-demo />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import MadImageCrossDemo from '@/usages/patterns/MadImageCrossDemo.vue'

@Options({
  components: {
    MadImageCrossDemo,
  },
})
export default class Home extends Vue {}
</script>

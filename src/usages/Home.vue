<template>
  <div class="home">home</div>
  <mad-image-overlap-demo />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import MadGearDemo from '@/usages/patterns/MadGearDemo.vue'
import MadImageOverlapDemo from '@/usages/patterns/MadImageOverlapDemo.vue'

@Options({
  components: {
    MadImageOverlapDemo,
  },
})
export default class Home extends Vue {}
</script>

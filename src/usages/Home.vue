<template>
  <div class="home"></div>
  <mad-clip-path-usage></mad-clip-path-usage>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'
import MadAfterImageDemo from '@/usages/patterns/MadAfterImageDemo.vue'
import MadCircleRippleDemo from '@/usages/patterns/MadCircleRippleDemo.vue'
import MadClipPath from '@/patterns/MadClipPath.vue'
import MadClipPathUsage from '@/usages/patterns/MadClipPathUsage.vue'

@Options({
  components: {
    HelloWorld,
    MadClipPathUsage,
  },
})
export default class Home extends Vue {}
</script>

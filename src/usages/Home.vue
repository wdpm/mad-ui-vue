<template>
  <div class="home"></div>
  <mad-inset-border-demo />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'
import MadAfterImageDemo from '@/usages/patterns/MadAfterImageDemo.vue'
import MadCircleRippleDemo from '@/usages/patterns/MadCircleRippleDemo.vue'
import MadClipPath from '@/patterns/MadClipPath.vue'
import MadClipPathUsage from '@/usages/patterns/MadClipPathUsage.vue'
import MadInsetBorderDemo from '@/usages/patterns/MadInsetBorderDemo.vue'

@Options({
  components: {
    HelloWorld,
    MadInsetBorderDemo,
  },
})
export default class Home extends Vue {}
</script>

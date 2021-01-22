<template>
  <div class="home"></div>
  <mad-circle-ripple-demo />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'
import MadAfterImageDemo from '@/usages/patterns/MadAfterImageDemo.vue'
import MadCircleRippleDemo from '@/usages/patterns/MadCircleRippleDemo.vue'

@Options({
  components: {
    HelloWorld,
    MadCircleRippleDemo,
  },
})
export default class Home extends Vue {}
</script>

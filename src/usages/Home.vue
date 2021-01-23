<template>
  <div class="home"></div>
  <mad-reveal-image-demo />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'
import MadLineNoiseDemo from '@/usages/patterns/MadLineNoiseDemo.vue'
import MadRevealImageDemo from '@/usages/patterns/MadRevealImageDemo.vue'

@Options({
  components: {
    HelloWorld,
    MadRevealImageDemo,
  },
})
export default class Home extends Vue {}
</script>

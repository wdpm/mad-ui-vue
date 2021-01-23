<template>
  <div class="home"></div>
  <mad-line-noise-demo></mad-line-noise-demo>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'
import MadLineNoiseDemo from '@/usages/patterns/MadLineNoiseDemo.vue'

@Options({
  components: {
    HelloWorld,
    MadLineNoiseDemo,
  },
})
export default class Home extends Vue {}
</script>

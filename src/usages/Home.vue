<template>
  <div class="home"></div>
  <mad-after-image-demo></mad-after-image-demo>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'
import MadAfterImageDemo from '@/usages/patterns/MadAfterImageDemo.vue'

@Options({
  components: {
    HelloWorld,
    MadAfterImageDemo,
  },
})
export default class Home extends Vue {}
</script>

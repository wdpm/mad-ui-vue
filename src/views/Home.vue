<template>
  <div class="home"></div>
  <mad-media-demo></mad-media-demo>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'
import MadMediaDemo from '@/views/MadMediaDemo.vue'

@Options({
  components: {
    HelloWorld,
    MadMediaDemo,
  },
})
export default class Home extends Vue {}
</script>

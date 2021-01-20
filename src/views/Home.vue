<template>
  <div class="home"></div>
  <mad-container-demo></mad-container-demo>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'
import MadContainerDemo from '@/views/MadContainerDemo.vue'

@Options({
  components: {
    HelloWorld,
    MadContainerDemo,
  },
})
export default class Home extends Vue {}
</script>

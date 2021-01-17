<template>
  <div class="home"></div>
  <mad-modal-demo></mad-modal-demo>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'
import MadModalDemo from '@/views/MadModalDemo.vue'

@Options({
  components: {
    HelloWorld,
    MadModalDemo,
  },
})
export default class Home extends Vue {}
</script>

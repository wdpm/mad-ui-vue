<template>
  <div class="home"></div>
  <mad-input-demo />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'
import MadInputDemo from '@/views/MadInputDemo.vue'

@Options({
  components: {
    HelloWorld,
    MadInputDemo,
  },
})
export default class Home extends Vue {}
</script>

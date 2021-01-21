<template>
  <div class="home"></div>
  <mad-text-area-demo />
  <mad-input-demo />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'
import MadTextAreaDemo from '@/views/MadTextAreaDemo.vue'
import MadInputDemo from '@/views/MadInputDemo.vue'

@Options({
  components: {
    HelloWorld,
    MadTextAreaDemo,
    MadInputDemo,
  },
})
export default class Home extends Vue {}
</script>

<template>
  <div class="home"></div>
  <mad-border-composition-demo />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'
import MadBorderCompositionDemo from '@/usages/patterns/MadBorderCompositionDemo.vue'

@Options({
  components: {
    HelloWorld,
    MadBorderCompositionDemo,
  },
})
export default class Home extends Vue {}
</script>

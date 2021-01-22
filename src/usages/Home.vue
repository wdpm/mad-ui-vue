<template>
  <div class="home"></div>
  <mad-inset-border-demo />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'
import MadInsetBorderDemo from '@/usages/patterns/MadInsetBorderDemo.vue'

@Options({
  components: {
    HelloWorld,
    MadInsetBorderDemo,
  },
})
export default class Home extends Vue {}
</script>

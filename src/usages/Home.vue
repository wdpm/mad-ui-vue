<template>
  <div class="home"></div>
  <mad-grid-demo />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'
import MadInsetBorderDemo from '@/usages/patterns/MadInsetBorderDemo.vue'
import MadGridDemo from '@/usages/patterns/MadGridDemo.vue'

@Options({
  components: {
    HelloWorld,
    MadGridDemo,
  },
})
export default class Home extends Vue {}
</script>

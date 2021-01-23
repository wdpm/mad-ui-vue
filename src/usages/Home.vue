<template>
  <div class="home"></div>
  <mad-circular-text-group-demo />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'
import MadCircularTextGroupDemo from '@/usages/patterns/MadCircularTextGroupDemo.vue'

@Options({
  components: {
    HelloWorld,
    MadCircularTextGroupDemo,
  },
})
export default class Home extends Vue {}
</script>

<template>
  <div class="home"></div>
  <mad-tag-demo></mad-tag-demo>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'
import MadTagDemo from '@/views/MadTagDemo.vue'

@Options({
  components: {
    HelloWorld,
    MadTagDemo,
  },
})
export default class Home extends Vue {}
</script>

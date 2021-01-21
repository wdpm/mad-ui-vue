<template>
  <div class="home"></div>
  <mad-select-demo></mad-select-demo>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'
import MadSelectDemo from '@/usages/form/MadSelectDemo.vue'

@Options({
  components: {
    HelloWorld,
    MadSelectDemo,
  },
})
export default class Home extends Vue {}
</script>

<template>
  <div class="home"></div>
  <mad-radio-demo></mad-radio-demo>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'
import MadRadioDemo from '@/usages/form/MadRadioDemo.vue'

@Options({
  components: {
    HelloWorld,
    MadRadioDemo,
  },
})
export default class Home extends Vue {}
</script>

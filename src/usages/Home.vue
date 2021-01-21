<template>
  <div class="home"></div>
  <mad-orbit-spinner-demo></mad-orbit-spinner-demo>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'
import MadRadioDemo from '@/usages/form/MadRadioDemo.vue'
import MadOrbitSpinnerDemo from '@/usages/elements/MadOrbitSpinnerDemo.vue'

@Options({
  components: {
    HelloWorld,
    MadOrbitSpinnerDemo,
  },
})
export default class Home extends Vue {}
</script>

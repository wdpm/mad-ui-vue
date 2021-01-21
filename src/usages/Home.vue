<template>
  <div class="home"></div>
  <mad-shield-demo></mad-shield-demo>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'
import MadOrbitSpinnerDemo from '@/usages/elements/MadOrbitSpinnerDemo.vue'
import MadShieldDemo from '@/usages/elements/MadShieldDemo.vue'

@Options({
  components: {
    HelloWorld,
    MadShieldDemo,
  },
})
export default class Home extends Vue {}
</script>

<template>
  <div class="home">home</div>
  <mad-gear-demo />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import MadGearDemo from '@/usages/patterns/MadGearDemo.vue'

@Options({
  components: {
    MadGearDemo,
  },
})
export default class Home extends Vue {}
</script>

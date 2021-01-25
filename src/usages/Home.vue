<template>
  <div class="home">home</div>
  <mad-wave-demo/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import MadWaveDemo from "@/usages/patterns/MadWaveDemo.vue";

@Options({
  components: {
    MadWaveDemo,
  },
})
export default class Home extends Vue {}
</script>

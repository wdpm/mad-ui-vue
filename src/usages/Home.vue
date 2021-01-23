<template>
  <div class="home">home</div>
  <mad-cover-demo />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import MadCoverDemo from '@/usages/patterns/MadCoverDemo.vue'

@Options({
  components: {
    MadCoverDemo,
  },
})
export default class Home extends Vue {}
</script>

<template>
  <div class="home">home</div>
  <mad-divider-demo></mad-divider-demo>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import MadDividerDemo from '@/usages/document/divider/index.vue'

@Options({
  components: {
    MadDividerDemo,
  },
})
export default class Home extends Vue {}
</script>

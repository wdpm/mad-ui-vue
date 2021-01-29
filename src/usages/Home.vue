<template>
  <div class="home">home</div>
  <mad-code-block-demo />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import MadCodeBlockDemo from '@/usages/document/MadCodeBlockDemo.vue'

@Options({
  components: {
    MadCodeBlockDemo,
  },
})
export default class Home extends Vue {}
</script>

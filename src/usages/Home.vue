<template>
  <div class="home">home</div>
  <mad-letter-paper-demo />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import MadLetterPaperDemo from '@/usages/patterns/MadLetterPaperDemo.vue'

@Options({
  components: {
    MadLetterPaperDemo,
  },
})
export default class Home extends Vue {}
</script>

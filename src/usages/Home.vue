<template>
  <div class="home">home</div>
  <mad-letter-box-demo/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import MadLetterPaperDemo from '@/usages/patterns/MadLetterPaperDemo.vue'
import MadLetterBoxDemo from "@/usages/patterns/MadLetterBoxDemo.vue";

@Options({
  components: {
    MadLetterBoxDemo,
  },
})
export default class Home extends Vue {}
</script>

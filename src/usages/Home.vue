<template>
  <p>Home page</p>
  <mad-letter-paper-demo></mad-letter-paper-demo>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import MadLetterPaperUsageSize from "@/usages/patterns/letter-paper/MadLetterPaperUsageSize.vue";
import MadLetterPaperDemo from "@/usages/patterns/letter-paper/MadLetterPaperDemo.vue";

@Options({
  components: {
    MadLetterPaperDemo
  },
})
export default class Home extends Vue {}
</script>

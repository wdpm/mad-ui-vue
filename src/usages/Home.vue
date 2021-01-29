<template>
  <mad-divider-demo></mad-divider-demo>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import MadDividerDemo from '@/usages/elements/divider/index.vue'

@Options({
  components: {
    MadDividerDemo,
  },
})
export default class Home extends Vue {}
</script>

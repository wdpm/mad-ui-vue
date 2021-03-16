<template>
  <p>Home page</p>
  <mad-circle-ripple> click me</mad-circle-ripple>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
// import { MadCircleRipple } from '@/plugins/ripple'

@Options({
  components: {
    // MadCircleRipple,
  },
})
export default class Home extends Vue {}
</script>

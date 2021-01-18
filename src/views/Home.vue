<template>
  <div class="home"></div>
  <mad-column-basics></mad-column-basics>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'
import MadColumnBasics from '@/views/MadColumnBasics.vue'

@Options({
  components: {
    HelloWorld,
    MadColumnBasics,
  },
})
export default class Home extends Vue {}
</script>

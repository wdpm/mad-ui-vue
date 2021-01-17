<template>
  <div class="home"></div>
  <mad-pagination-demo></mad-pagination-demo>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'
import MadPaginationDemo from '@/views/MadPaginationDemo.vue'

@Options({
  components: {
    HelloWorld,
    MadPaginationDemo,
  },
})
export default class Home extends Vue {}
</script>

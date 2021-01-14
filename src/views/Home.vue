<template>
  <div class="home"></div>
  <mad-breadcrumb-demo></mad-breadcrumb-demo>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'
import MadBreadcrumbDemo from '@/views/MadBreadcrumbDemo.vue'

@Options({
  components: {
    HelloWorld,
    MadBreadcrumbDemo,
  },
})
export default class Home extends Vue {}
</script>

<template>
  <mad-tree-item-demo></mad-tree-item-demo>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import MadTreeItemDemo from '@/usages/document/MadTreeItemDemo.vue'

@Options({
  components: {
    MadTreeItemDemo,
  },
})
export default class Home extends Vue {}
</script>

<template>
  <mad-button-demo></mad-button-demo>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import MadTreeItemDemo from '@/usages/document/MadTreeItemDemo.vue'
import MadButtonDemo from "@/usages/elements/button/MadButtonDemo.vue";

@Options({
  components: {
    MadButtonDemo,
  },
})
export default class Home extends Vue {}
</script>

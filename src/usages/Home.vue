<template>
  <!--  <mad-button-demo></mad-button-demo>-->
  <p>Home</p>
  <mad-table-usage-combination></mad-table-usage-combination>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import MadTreeItemDemo from '@/usages/document/MadTreeItemDemo.vue'
import MadTableUsageCombination from '@/usages/elements/table/MadTableUsageCombination.vue'
// import MadButtonDemo from "@/usages/elements/button/MadButtonDemo.vue";

@Options({
  components: {
    MadTableUsageCombination,
  },
})
export default class Home extends Vue {}
</script>

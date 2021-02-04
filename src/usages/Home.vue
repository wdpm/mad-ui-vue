<template>
  <!--  <mad-button-demo></mad-button-demo>-->
  <p>Home</p>
  <mad-select-usage-basic></mad-select-usage-basic>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import MadTreeItemDemo from '@/usages/document/MadTreeItemDemo.vue'
import MadTableUsageCombination from '@/usages/elements/table/MadTableUsageCombination.vue'
import MadSelectUsageBasic from "@/usages/form/select/MadSelectUsageBasic.vue";
// import MadButtonDemo from "@/usages/elements/button/MadButtonDemo.vue";

@Options({
  components: {
    MadTableUsageCombination,
    MadSelectUsageBasic
  },
})
export default class Home extends Vue {}
</script>

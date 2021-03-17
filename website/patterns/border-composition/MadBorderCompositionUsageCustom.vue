<template>
  <mad-border-composition border-color="pink" border-width="2px">
    <div class="demo">hover to see effect</div>
  </mad-border-composition>
</template>

<script>
import MadBorderComposition from '@/patterns/MadBorderComposition'

export default {
  name: 'MadBorderCompositionUsageCustom',
  components: {
    MadBorderComposition,
  },
}
</script>

<style scoped lang="scss">
.demo {
  width: 300px;
  height: 150px;
  background-color: white;
  border: 1px solid black;
}
</style>

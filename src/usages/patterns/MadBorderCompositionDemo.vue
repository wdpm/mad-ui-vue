<template>
  <h2>basic</h2>
  <mad-border-composition>
    <div class="demo">hover to see effect</div>
  </mad-border-composition>

  <h2>configurable</h2>
  <mad-border-composition border-color="pink" border-width="2px">
    <div class="demo">hover to see effect</div>
  </mad-border-composition>
</template>

<script>
import MadBorderComposition from '@/patterns/MadBorderComposition'

export default {
  name: 'MadBorderCompositionDemo',
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

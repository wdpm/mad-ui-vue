<template>
  <mad-row>
    <mad-column>
      <p class="column-demo">column 1</p>
    </mad-column>
    <mad-column>
      <p class="column-demo">column 2</p>
    </mad-column>
    <mad-column>
      <p class="column-demo">column 3</p>
    </mad-column>
  </mad-row>
  <mad-row>
    <mad-column>
      <p class="column-demo">column 1</p>
    </mad-column>
    <mad-column>
      <p class="column-demo">column 2</p>
    </mad-column>
    <mad-column>
      <p class="column-demo">column 3</p>
    </mad-column>
    <mad-column>
      <p class="column-demo">column 4</p>
    </mad-column>
  </mad-row>
</template>

<script>
import MadRow from '@/layout/MadRow'
import MadColumn from '@/layout/MadColumn'

export default {
  name: 'MadColumnUsageBasic',
  components: {
    MadRow,
    MadColumn,
  },
}
</script>

<style scoped lang="scss">
.column-demo {
  background: lightskyblue;
  text-align: center;
  padding: 0.75em 0;
}

.column-auto {
  background: #eee;
  text-align: center;
  padding: 0.75em 0;
}
</style>

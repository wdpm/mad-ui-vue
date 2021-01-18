<template>
  <h2>column basics(Equally divided)</h2>
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

  <h2>specify fixed percent widths</h2>
  <mad-row>
    <mad-column width="four-fifths">
      <p class="column-demo">four-fifths</p>
    </mad-column>
    <mad-column>
      <p class="column-demo">auto</p>
    </mad-column>
  </mad-row>
  <mad-row>
    <mad-column width="three-quarters">
      <p class="column-demo">three-quarters</p>
    </mad-column>
    <mad-column>
      <p class="column-demo">auto</p>
    </mad-column>
  </mad-row>
  <mad-row>
    <mad-column width="two-third">
      <p class="column-demo">two-third</p>
    </mad-column>
    <mad-column>
      <p class="column-demo">auto</p>
    </mad-column>
  </mad-row>
  <mad-row>
    <mad-column width="three-fifths">
      <p class="column-demo">three-fifths</p>
    </mad-column>
    <mad-column>
      <p class="column-demo">auto</p>
    </mad-column>
  </mad-row>
  <mad-row>
    <mad-column width="half">
      <p class="column-demo">half</p>
    </mad-column>
    <mad-column>
      <p class="column-demo">auto</p>
    </mad-column>
  </mad-row>
  <mad-row>
    <mad-column width="two-fifths">
      <p class="column-demo">two-fifths</p>
    </mad-column>
    <mad-column>
      <p class="column-demo">auto</p>
    </mad-column>
  </mad-row>
  <mad-row>
    <mad-column width="one-third">
      <p class="column-demo">one-third</p>
    </mad-column>
    <mad-column>
      <p class="column-demo">auto</p>
    </mad-column>
  </mad-row>
  <mad-row>
    <mad-column width="one-quarter">
      <p class="column-demo">one-quarter</p>
    </mad-column>
    <mad-column>
      <p class="column-demo">auto</p>
    </mad-column>
  </mad-row>
  <mad-row>
    <mad-column width="one-fifth">
      <p class="column-demo">one-fifth</p>
    </mad-column>
    <mad-column>
      <p class="column-demo">auto</p>
    </mad-column>
  </mad-row>

  <h2>specify fixed column widths by (?/12)</h2>
  <mad-row>
    <mad-column column="1">
      <p class="column-demo">column 1/12</p>
    </mad-column>
    <mad-column>
      <p class="column-demo">auto</p>
    </mad-column>
  </mad-row>
  <mad-row>
    <mad-column column="2">
      <p class="column-demo">column 2/12</p>
    </mad-column>
    <mad-column>
      <p class="column-demo">auto</p>
    </mad-column>
  </mad-row>
  <mad-row>
    <mad-column column="3">
      <p class="column-demo">column 3/12</p>
    </mad-column>
    <mad-column>
      <p class="column-demo">auto</p>
    </mad-column>
  </mad-row>
  <mad-row>
    <mad-column column="4">
      <p class="column-demo">column 4/12</p>
    </mad-column>
    <mad-column>
      <p class="column-demo">auto</p>
    </mad-column>
  </mad-row>
  <mad-row>
    <mad-column column="5">
      <p class="column-demo">column 5/12</p>
    </mad-column>
    <mad-column>
      <p class="column-demo">auto</p>
    </mad-column>
  </mad-row>
  <mad-row>
    <mad-column column="6">
      <p class="column-demo">column 6/12</p>
    </mad-column>
    <mad-column>
      <p class="column-demo">auto</p>
    </mad-column>
  </mad-row>
  <mad-row>
    <mad-column column="7">
      <p class="column-demo">column 7/12</p>
    </mad-column>
    <mad-column>
      <p class="column-demo">auto</p>
    </mad-column>
  </mad-row>
  <mad-row>
    <mad-column column="8">
      <p class="column-demo">column 8/12</p>
    </mad-column>
    <mad-column>
      <p class="column-demo">auto</p>
    </mad-column>
  </mad-row>
  <mad-row>
    <mad-column column="9">
      <p class="column-demo">column 9/12</p>
    </mad-column>
    <mad-column>
      <p class="column-demo">auto</p>
    </mad-column>
  </mad-row>
  <mad-row>
    <mad-column column="10">
      <p class="column-demo">column 10/12</p>
    </mad-column>
    <mad-column>
      <p class="column-demo">auto</p>
    </mad-column>
  </mad-row>
  <mad-row>
    <mad-column column="11">
      <p class="column-demo">column 11/12</p>
    </mad-column>
    <mad-column>
      <p class="column-demo">auto</p>
    </mad-column>
  </mad-row>
</template>

<script>
import MadRow from '@/layout/MadRow'
import MadColumn from '@/layout/MadColumn'

export default {
  name: 'MadColumnDemo',
  components: {
    MadRow,
    MadColumn,
  },
}
</script>

<style scoped lang="scss">
.column-demo {
  background: #eee;
  text-align: center;
  padding: 0.75em 0;
}
</style>

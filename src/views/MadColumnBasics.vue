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
    <mad-column column="four-fifths">
      <p class="column-demo">four-fifths</p>
    </mad-column>
    <mad-column>
      <p class="column-auto">auto</p>
    </mad-column>
  </mad-row>
  <mad-row>
    <mad-column column="three-quarters">
      <p class="column-demo">three-quarters</p>
    </mad-column>
    <mad-column>
      <p class="column-auto">auto</p>
    </mad-column>
  </mad-row>
  <mad-row>
    <mad-column column="two-third">
      <p class="column-demo">two-third</p>
    </mad-column>
    <mad-column>
      <p class="column-auto">auto</p>
    </mad-column>
  </mad-row>
  <mad-row>
    <mad-column column="three-fifths">
      <p class="column-demo">three-fifths</p>
    </mad-column>
    <mad-column>
      <p class="column-auto">auto</p>
    </mad-column>
  </mad-row>
  <mad-row>
    <mad-column column="half">
      <p class="column-demo">half</p>
    </mad-column>
    <mad-column>
      <p class="column-auto">auto</p>
    </mad-column>
  </mad-row>
  <mad-row>
    <mad-column column="two-fifths">
      <p class="column-demo">two-fifths</p>
    </mad-column>
    <mad-column>
      <p class="column-auto">auto</p>
    </mad-column>
  </mad-row>
  <mad-row>
    <mad-column column="one-third">
      <p class="column-demo">one-third</p>
    </mad-column>
    <mad-column>
      <p class="column-auto">auto</p>
    </mad-column>
  </mad-row>
  <mad-row>
    <mad-column column="one-quarter">
      <p class="column-demo">one-quarter</p>
    </mad-column>
    <mad-column>
      <p class="column-auto">auto</p>
    </mad-column>
  </mad-row>
  <mad-row>
    <mad-column column="one-fifth">
      <p class="column-demo">one-fifth</p>
    </mad-column>
    <mad-column>
      <p class="column-auto">auto</p>
    </mad-column>
  </mad-row>

  <h2>specify fixed column widths by (?/12)</h2>
  <mad-row>
    <mad-column column="1">
      <p class="column-demo">column 1/12</p>
    </mad-column>
    <mad-column>
      <p class="column-auto">auto</p>
    </mad-column>
  </mad-row>
  <mad-row>
    <mad-column column="2">
      <p class="column-demo">column 2/12</p>
    </mad-column>
    <mad-column>
      <p class="column-auto">auto</p>
    </mad-column>
  </mad-row>
  <mad-row>
    <mad-column column="3">
      <p class="column-demo">column 3/12</p>
    </mad-column>
    <mad-column>
      <p class="column-auto">auto</p>
    </mad-column>
  </mad-row>
  <mad-row>
    <mad-column column="4">
      <p class="column-demo">column 4/12</p>
    </mad-column>
    <mad-column>
      <p class="column-auto">auto</p>
    </mad-column>
  </mad-row>
  <mad-row>
    <mad-column column="5">
      <p class="column-demo">column 5/12</p>
    </mad-column>
    <mad-column>
      <p class="column-auto">auto</p>
    </mad-column>
  </mad-row>
  <mad-row>
    <mad-column column="6">
      <p class="column-demo">column 6/12</p>
    </mad-column>
    <mad-column>
      <p class="column-auto">auto</p>
    </mad-column>
  </mad-row>
  <mad-row>
    <mad-column column="7">
      <p class="column-demo">column 7/12</p>
    </mad-column>
    <mad-column>
      <p class="column-auto">auto</p>
    </mad-column>
  </mad-row>
  <mad-row>
    <mad-column column="8">
      <p class="column-demo">column 8/12</p>
    </mad-column>
    <mad-column>
      <p class="column-auto">auto</p>
    </mad-column>
  </mad-row>
  <mad-row>
    <mad-column column="9">
      <p class="column-demo">column 9/12</p>
    </mad-column>
    <mad-column>
      <p class="column-auto">auto</p>
    </mad-column>
  </mad-row>
  <mad-row>
    <mad-column column="10">
      <p class="column-demo">column 10/12</p>
    </mad-column>
    <mad-column>
      <p class="column-auto">auto</p>
    </mad-column>
  </mad-row>
  <mad-row>
    <mad-column column="11">
      <p class="column-demo">column 11/12</p>
    </mad-column>
    <mad-column>
      <p class="column-auto">auto</p>
    </mad-column>
  </mad-row>

  <h2>offset</h2>
  <mad-row>
    <mad-column column="6" offset="6">
      <p class="column-demo">column 6/12 with offset 6/12</p>
    </mad-column>
  </mad-row>
  <mad-row>
    <mad-column column="6" offset="one-fifth">
      <p class="column-demo">column 6/12 with offset one-fifth</p>
    </mad-column>
  </mad-row>

  <h2>responsiveness with breakpoint(activated-from-md)</h2>
  <mad-row activated-from="md">
    <mad-column><p class="column-demo">column 1</p></mad-column>
    <mad-column><p class="column-demo">column 2</p></mad-column>
    <mad-column><p class="column-demo">column 3</p></mad-column>
    <mad-column><p class="column-demo">column 4</p></mad-column>
  </mad-row>

  <h2>Different column sizes per breakpoint</h2>
  <mad-row>
    <!-- must define all breakpoints, or will cause view bug-->
    <mad-column
      class="column-xs-12 column-sm-6 column-md-4 column-lg-3 column-xlg-1"
    >
      <p class="column-demo">
        <span class="display-sm-down">.column-xs-12</span>
        <span class="display-sm-to-md">.column-sm-6</span>
        <span class="display-md-to-lg">.column-md-4</span>
        <span class="display-lg-to-xlg">.column-lg-3</span>
        <span class="display-xlg-up">.column-xlg-1</span>
      </p>
    </mad-column>
    <mad-column><p class="column-auto">auto</p></mad-column>
  </mad-row>

  <h2>column gap</h2>
  <!--0 -8 level-->
  <mad-row column-gap="8">
    <mad-column><p class="column-demo">column 1</p></mad-column>
    <mad-column><p class="column-demo">column 2</p></mad-column>
    <mad-column><p class="column-demo">column 3</p></mad-column>
    <mad-column><p class="column-demo">column 4</p></mad-column>
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
@import 'src/scss/utilities/display';

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

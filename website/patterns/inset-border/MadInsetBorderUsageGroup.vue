<template>
  <p>note: reload page to see effect</p>
  <div class="inset-border-group">
    <mad-row>
      <mad-column>
        <mad-inset-border
          :src="require('@/../website/assets/1.png').default"
          animation="background-slide-up"
        ></mad-inset-border>
      </mad-column>
      <mad-column>
        <mad-inset-border
          :src="require('@/../website/assets/3.jpg').default"
          animation="background-scale-down"
        ></mad-inset-border>
      </mad-column>
      <mad-column>
        <mad-inset-border
          :src="require('@/../website/assets/4.jpg').default"
          animation="background-slide-down"
        ></mad-inset-border>
      </mad-column>
    </mad-row>
  </div>
</template>

<script>
import MadInsetBorder from '@/patterns/MadInsetBorder'
import MadRow from '@/layout/MadRow'
import MadColumn from '@/layout/MadColumn'

export default {
  name: 'MadInsetBorderUsageGroup',
  components: {
    MadColumn,
    MadRow,
    MadInsetBorder,
  },
}
</script>

<style scoped lang="scss">
.inset-border-group {
  width: fit-content;
}
</style>

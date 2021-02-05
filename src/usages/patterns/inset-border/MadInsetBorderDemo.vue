<template>
  <h2>basic</h2>
  <mad-inset-border :src="require('@/assets/1.png').default"></mad-inset-border>

  <h2>lined</h2>
  <mad-inset-border
    :src="require('@/assets/2.jpg').default"
    lined
  ></mad-inset-border>

  <h2>
    with animation
    (background-slide-up/background-slide-down/background-scale-down)
  </h2>
  <mad-inset-border
    :src="require('@/assets/2.jpg').default"
    lined
    animation="background-slide-up"
  ></mad-inset-border>

  <h2>group</h2>
  <div class="inset-border-group">
    <mad-row>
      <mad-column>
        <mad-inset-border
          :src="require('@/assets/1.png').default"
          animation="background-slide-up"
        ></mad-inset-border>
      </mad-column>
      <mad-column>
        <mad-inset-border
          :src="require('@/assets/3.jpg').default"
          animation="background-scale-down"
        ></mad-inset-border>
      </mad-column>
      <mad-column>
        <mad-inset-border
          :src="require('@/assets/4.jpg').default"
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
  name: 'MadInsetBorderDemo',
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

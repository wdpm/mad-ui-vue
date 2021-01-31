<template>
  <mad-icon>
    <i class="arrow left"></i>
  </mad-icon>
  <mad-icon>
    <i class="arrow right"></i>
  </mad-icon>
</template>

<script>
import MadIcon from '@/elements/MadIcon'

export default {
  name: 'MadIconDemo',
  components: {
    MadIcon,
  },
}
</script>

<style scoped lang="scss">
@import '../../../scss/mixins/all';

.arrow {
  @include arrow-base();

  &.right {
    @include arrow-direction($direction: right);
  }

  &.left {
    @include arrow-direction($direction: left);
  }
}
</style>

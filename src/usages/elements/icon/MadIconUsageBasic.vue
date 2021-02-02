<template>
  <mad-icon>
    <i class="arrow left"></i>
  </mad-icon>
  <mad-icon>
    <i class="arrow right"></i>
  </mad-icon>
  <mad-icon>
    <i class="arrow up"></i>
  </mad-icon>
  <mad-icon>
    <i class="arrow down"></i>
  </mad-icon>
</template>

<script>
import MadIcon from '@/elements/MadIcon'

export default {
  name: 'MadIconUsageBasic',
  components: {
    MadIcon,
  },
}
</script>

<style scoped lang="scss">
@import 'src/scss/mixins/all';

.arrow {
  @include arrow-base();

  &.right {
    @include arrow-direction($direction: right);
  }

  &.left {
    @include arrow-direction($direction: left);
  }

  &.up {
    @include arrow-direction($direction: up);
  }

  &.down {
    @include arrow-direction($direction: down);
  }
}
</style>

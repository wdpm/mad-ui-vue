<template>
  <div class="block">
    <slot></slot>
  </div>
</template>

<script>
/**
 * most basic spacer block
 *
 * TODO: pass props to make margin-bottom configurable
 */
export default {
  name: 'MadBlock',
}
</script>

<style scoped lang="scss">
@import '../../src/scss/mixins/block';

.block {
  @include block;
}
</style>

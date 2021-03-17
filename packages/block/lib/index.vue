<template>
  <div class="block">
    <slot></slot>
  </div>
</template>

<script>
/**
 * most basic spacer block
 *
 */
export default {
  name: 'MadBlock',
}
</script>

<style scoped lang="scss">
@import '../../scss/mixins/block';

.block {
  @include block;
}
</style>

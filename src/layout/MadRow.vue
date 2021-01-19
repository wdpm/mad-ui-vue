<template>
  <div class="row" :class="[activatedFromClass]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MadRow',
  props: {
    activatedFrom: {
      type: String,
      default: '',
      required: false,
      validator: function (value) {
        return ['', 'sm', 'md', 'lg', 'xlg'].indexOf(value) !== -1
      },
    },
  },
  computed: {
    activatedFromClass() {
      return this.activatedFrom ? `activated-from-${this.activatedFrom}` : ''
    },
  },
}
</script>

<style scoped lang="scss">
@import 'src/scss/layout/grid';
</style>

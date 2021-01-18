<template>
  <div class="column" :class="[widthClass, columnClass]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MadColumn',
  props: {
    width: {
      type: String,
      default: '',
      required: false,
    },
    column: {
      type: Number,
      default: null,
      required: false,
    },
  },
  computed: {
    widthClass() {
      return this.width ? `width-${this.width}` : ''
    },
    columnClass() {
      return this.column ? `column-${this.column}` : ''
    },
  },
}
</script>

<style scoped lang="scss">
@import 'src/scss/layout/grid';
</style>

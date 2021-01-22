<template>
  <div
    class="inset-border"
    :class="[linedClass]"
    :style="{
      backgroundImage: `url(${src})`,
    }"
  ></div>
</template>

<script>
export default {
  name: 'MadInsetBorder',
  props: {
    lined: {
      type: Boolean,
      required: false,
    },
    src: {
      type: String,
      default: '',
      required: true,
    },
    width: {
      type: String,
      default: '320px',
      required: false,
    },
    height: {
      type: String,
      default: '180px',
      required: false,
    },
  },
  computed: {
    linedClass() {
      return this.lined ? 'variant-lined' : ''
    },
  },
}
</script>

<style scoped lang="scss">
.inset-border {
  //background-image: url("//");
  height: 320px;
  width: 180px;

  background-size: cover;
  background-position: center;
  box-shadow: inset 0 0 0 10px rgba(0, 0, 0, 0.5);

  &.variant-lined {
    box-shadow: none;
    outline: 1px solid white;
    outline-offset: -10px; /* use negative offset*/
  }
}
</style>

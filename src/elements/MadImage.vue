<template>
  <div
    class="image-container"
    :style="{
      width: width,
      height: height,
      'min-height': minHeight,
      'min-width': minWidth,
      'max-height': maxHeight,
      'max-width': maxWidth,
    }"
  >
    <figure class="image" :class="`is-${size}`">
      <img :src="src" :alt="alt" :class="{ 'is-rounded': isRounded }" />
    </figure>
  </div>
</template>

<script>
/**
 * A container for responsive images
 *
 * TODO: placeholder Slot for image placeholder
 */
export default {
  name: 'MadImage',
  props: {
    // size: aspect-ratio or explicit width x height size
    size: {
      type: String,
      required: false,
    },
    src: {
      type: String,
      required: true,
      default: '',
    },
    isRounded: {
      type: Boolean,
      required: false,
    },
    width: {
      type: String, // default: 'auto',
      required: false,
    },
    height: {
      type: String,
      required: false,
    },
    minHeight: {
      type: String,
      required: false,
    },
    minWidth: {
      type: String,
      required: false,
    },
    maxHeight: {
      type: String,
      required: false,
    },
    maxWidth: {
      type: String,
      required: false,
    },
    alt: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>

<style scoped lang="scss">
@import 'src/scss/mixins/_all';

$dimensions: 16 24 32 48 64 96 128 !default;
$ratios: '1by1', '1by2', '1by3', '2by1', '2by3', '3by1', '3by2', '3by4', '3by5',
  '4by3', '4by5', '5by3', '5by4', '9by16', '16by9';

.image-container {
  overflow: hidden;

  .image {
    display: block;
    position: relative;

    img {
      display: block;
      height: auto;
      width: 100%;

      &.is-rounded {
        border-radius: $radius-rounded;
      }
    }

    &.is-fullwidth {
      width: 100%;
    }

    // Ratio
    &.is-1by1,
    &.is-5by4,
    &.is-4by3,
    &.is-3by2,
    &.is-5by3,
    &.is-16by9,
    &.is-2by1,
    &.is-3by1,
    &.is-4by5,
    &.is-3by4,
    &.is-2by3,
    &.is-3by5,
    &.is-9by16,
    &.is-1by2,
    &.is-1by3 {
      img {
        @include overlay();
        width: 100%;
        height: 100%;
      }
    }

    // ratio sizes
    @each $ratio in $ratios {
      $map: str-split-to-map($ratio, 'by');
      @each $w, $h in $map {
        &.is-#{$w}by#{$h} {
          //use padding-top can also works
          padding-bottom: (
              (to-number($h) / to-number($w)) * 100
            ) +#{'%'}; // + to avoid space
        }
      }
    }

    // explicit sizes
    @each $dimension in $dimensions {
      &.is-#{$dimension}x#{$dimension} {
        height: $dimension * 1px;
        width: $dimension * 1px;
      }
    }
  }
}
</style>

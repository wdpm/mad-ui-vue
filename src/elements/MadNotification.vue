<template>
  <div class="notification" :class="[colorClass, variantClass]">
    <button class="delete" @click="handleDelete"></button>
    <slot></slot>
  </div>
</template>

<script>
/**
 * TODO autoclose with delay
 */
export default {
  name: 'MadNotification',
  props: {
    hasDeleteButton: {
      type: Boolean,
      default: true,
      required: false,
    },
    color: {
      type: String,
      required: false,
      default: '',
      validator: function (value) {
        return (
          [
            '',
            'white',
            'black',
            'light',
            'dark',
            'primary',
            'info',
            'success',
            'warning',
            'danger',
          ].indexOf(value) !== -1
        )
      },
    },
    variant: {
      type: String,
      required: false,
      default: '',
      validator: function (value) {
        return ['', 'light', 'dark'].indexOf(value) !== -1
      },
    },
  },
  computed: {
    colorClass() {
      if (!this.color) return ''
      return `color-${this.color}`
    },
    variantClass() {
      if (!this.variant) return ''
      return `variant-${this.variant}`
    },
  },
  methods: {
    handleDelete() {
      this.$el.parentNode.removeChild(this.$el)
    },
  },
}
</script>

<style scoped lang="scss">
@import 'src/scss/mixins/_all';

$notification-background-color: $light !default;
$notification-code-background-color: $color-white !default;
$notification-radius: $radius !default;
// padding-right is more larger to make space for delete icon
$notification-padding: 1.25rem 2.5rem 1.25rem 1.5rem !default;

$notification-colors: $color-map !default;

.notification {
  @include block();
  position: relative;
  background-color: $notification-background-color;
  padding: $notification-padding;
  border-radius: $radius;

  // delete button
  > .delete {
    @include delete;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }

  // inner code snippet
  code,
  pre {
    background: $notification-code-background-color;
  }

  // colors and color variants
  @each $name, $pair in $notification-colors {
    $color: nth($pair, 1);
    $color-invert: nth($pair, 2);
    &.color-#{$name} {
      background-color: $color;
      color: $color-invert;
      // if has light and dark version
      @if length($pair) >= 4 {
        $color-light: nth($pair, 3);
        $color-dark: nth($pair, 4);
        &.variant-light {
          background-color: $color-light;
          color: $color-dark;
        }
        &.variant-dark {
          background-color: $color-dark;
          color: $color-light;
        }
      }
    }
  }
}
</style>

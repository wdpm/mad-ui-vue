<script>
import { h } from 'vue'
import { colorMapValues, sizes } from 'packages/utils/validator'

export default {
  name: 'MadButton',
  props: {
    tag: {
      type: String,
      default: 'button',
      validator: function (value) {
        return ['button', 'a', 'input'].indexOf(value) !== -1
      },
    },
    size: {
      type: String,
      default: '',
      validator: function (value) {
        return [...sizes].indexOf(value) !== -1
      },
    },
    color: {
      type: String,
      default: '',
      validator: function (value) {
        return [...colorMapValues].indexOf(value) !== -1
      },
    },
    light: {
      type: Boolean,
    },
    fullwidth: {
      type: Boolean,
    },
    outlined: {
      type: Boolean,
    },
    rounded: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
  },
  render() {
    // input element no slots
    const slots = this.tag === 'input' ? null : this.$slots.default()
    const basicStyle = this.$style['button']
    const sizeStyle = this.size ? this.$style[this.size] : ''
    const colorStyle = this.color ? this.$style[this.color] : ''
    const lightStyle = this.light ? this.$style['variant-light'] : ''
    const fullwidthStyle = this.fullwidth
      ? this.$style['variant-fullwidth']
      : ''
    const outlinedStyle = this.outlined ? this.$style['variant-outlined'] : ''
    const roundedStyle = this.rounded ? this.$style['variant-rounded'] : ''
    // fix `a` tag disabled='false' bug
    const disabledProp =
      this.tag === 'a' && !this.disabled ? null : { disabled: this.disabled }
    return h(
      this.tag,
      {
        class: [
          basicStyle,
          sizeStyle,
          colorStyle,
          lightStyle,
          fullwidthStyle,
          outlinedStyle,
          roundedStyle,
        ],
        ...disabledProp,
      },
      slots
    )
  },
}
</script>

<style module lang="scss">
@use 'sass:color';
@import '../../scss/mixins/all';

$button-color: $color-gray-900 !default;
$button-background-color: $color-white !default;

$button-size-small: $size-7 !default;
$button-size-normal: $size-6 !default;
$button-size-medium: $size-5 !default;
$button-size-large: $size-4 !default;

$button-border-color: $color-gray-300 !default;
$button-border-width: 1px !default;

$button-padding-vertical: calc(0.5em - #{$button-border-width}) !default;
$button-padding-horizontal: 1em !default;

$button-hover-color: $button-color !default;
$button-hover-border-color: $color-gray-800 !default;

$button-focus-color: $button-color !default;
$button-focus-border-color: $color-gray-500 !default;
$button-focus-box-shadow-size: 0 0 0 0.125em !default;
$button-focus-box-shadow-color: lighten(
  $button-focus-border-color,
  20%
) !default;

@mixin focus-box-shadow($bg-color) {
  &:focus,
  &.is-focused {
    box-shadow: $button-focus-box-shadow-size rgba($bg-color, 0.25);
  }
}

@mixin variant-light($color) {
  &.variant-light {
    color: darken($color, 30%);
    background-color: rgba($color, 0.2);
  }
}

@mixin variant-outlined($color) {
  &.variant-outlined {
    color: $color;
    border-color: $color;
    background-color: transparent;

    &:hover,
    &.is-hover {
      background-color: $color;
      border-color: $color;
      color: #fff;
    }
  }
}

@mixin disabled($color: $button-color) {
  &[disabled] {
    background-color: rgba($color, 0.6);
    border-color: transparent;
    box-shadow: none;
    cursor: not-allowed;
  }
}

.button {
  //display: flex;
  //align-items: center;
  outline: none;
  text-decoration: none;
  background-color: $button-background-color;
  border-color: $button-border-color;
  border-width: $button-border-width;
  border-style: solid;
  color: $button-color;
  cursor: pointer;
  padding: $button-padding-vertical $button-padding-horizontal;
  text-align: center;
  font-size: $button-size-normal;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;

  // States => change border-color/color/shadow
  &:hover,
  &.is-hovered {
    border-color: $button-hover-border-color;
    color: $button-hover-color;
  }

  &:focus,
  &.is-focused {
    border-color: $button-focus-border-color;
    color: $button-focus-color;
    box-shadow: $button-focus-box-shadow-size $button-focus-box-shadow-color;
  }

  // sizes by font-size
  &.small {
    font-size: $button-size-small;
  }

  &.normal {
    font-size: $button-size-normal;
  }

  &.medium {
    font-size: $button-size-medium;
  }

  &.large {
    font-size: $button-size-large;
  }

  // colors
  &.white {
    background-color: $color-white;
    color: color.invert($color-white, 100%);
    @include focus-box-shadow($color-white);
  }

  &.light {
    background-color: $color-gray-200;
    color: color.invert($color-gray-200, 100%);
    @include focus-box-shadow($color-gray-200);
  }

  &.dark {
    background-color: $color-gray-600;
    color: $color-white; //hardcode for Aa pass
    @include focus-box-shadow($color-gray-600);
  }

  &.black {
    background-color: $color-black;
    color: color.invert($color-black, 100%);
    @include focus-box-shadow($color-black);
  }

  &.text {
    background-color: transparent;
    color: black;
    text-decoration: underline;
    @include focus-box-shadow(black);
  }

  &.primary {
    background-color: $primary;
    color: white;
    @include focus-box-shadow($primary);
    @include variant-light($primary);
    @include variant-outlined($primary);
    @include disabled($primary);
  }

  &.info {
    background-color: $info;
    color: white;
    @include focus-box-shadow($info);
    @include variant-light($info);
    @include variant-outlined($info);
    @include disabled($info);
  }

  &.success {
    background-color: $success;
    color: white;
    @include focus-box-shadow($success);
    @include variant-light($success);
    @include variant-outlined($success);
    @include disabled($success);
  }

  &.warning {
    background-color: $warning;
    color: black;
    @include focus-box-shadow($warning);
    @include variant-light($warning);
    @include variant-outlined($warning);
    @include disabled($warning);
  }

  &.danger {
    background-color: $danger;
    color: white;
    @include focus-box-shadow($danger);
    @include variant-light($danger);
    @include variant-outlined($danger);
    @include disabled($danger);
  }

  // fullwidth
  &.variant-fullwidth {
    display: flex;
    width: 100%;
  }

  // is rounded
  &.variant-rounded {
    border-radius: $radius-rounded;
  }

  // disabled
  @include disabled();
}
</style>

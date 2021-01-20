<template>
  <input
    class="input"
    :class="[sizeClass, colorClass]"
    :placeholder="placeholder"
  />
</template>

<script>
/**
 * color
 *
 * sizes
 *
 * state
 */

import { colorMapSemanticValues, sizes } from '@/utils'

export default {
  name: 'MadInput',
  props: {
    size: {
      type: String,
      default: '',
      required: false,
      validator: function (value) {
        return [...sizes].indexOf(value) !== -1
      },
    },
    color: {
      type: String,
      default: '',
      required: false,
      validator: function (value) {
        return [...colorMapSemanticValues].indexOf(value) !== -1
      },
    },
    placeholder: {
      type: String,
      default: 'Input here',
      required: false,
    },
  },
  computed: {
    sizeClass() {
      return this.size ? `size-${this.size}` : ''
    },
    colorClass() {
      return this.color ? `color-${this.color}` : ''
    },
  },
}
</script>

<style scoped lang="scss">
@import 'src/scss/mixins/_all';

$input-color: $color-black;
$input-hover-border-color: $border-hover;
$input-placeholder-color: rgba($input-color, 0.2);

$input-padding: 0.5em 0.75em;
$input-border: 1px solid rgba(147, 128, 108, 0.25);
$input-border-radius: $radius;

// active same as focus
$input-focus-border-color: $link-focus;
$input-focus-box-shadow-size: 0 0 0 2px;
$input-focus-box-shadow-color: rgba($link-focus, 0.25);

$input-disabled-color: $text-light;
$input-disabled-background-color: $color-gray-100;
$input-disabled-border-color: $color-gray-100;
$input-disabled-placeholder-color: rgba($input-disabled-color, 0.3);

$input-color-map: $color-map;

.input {
  outline: none;
  line-height: 1.5;
  height: 2.5em;
  font-size: 1rem;
  border-radius: $input-border-radius;
  border: $input-border;
  padding: $input-padding;
  color: $input-color;

  // [states]
  //hover
  &:hover,
  &.state-hovered {
    border-color: $input-hover-border-color;
  }

  //focus & active
  &:focus,
  &.state-focused,
  &:active,
  &.state-active {
    border-color: $input-focus-border-color;
    box-shadow: $input-focus-box-shadow-size $input-focus-box-shadow-color;
  }

  // https://sass-lang.com/documentation/style-rules/parent-selector
  //disabled
  &[disabled],
    // fieldset[disabled] .input
  fieldset[disabled] & {
    background-color: $input-disabled-background-color;
    border-color: $input-disabled-border-color;
    box-shadow: none;
    color: $input-disabled-color;
    cursor: not-allowed;
    @include placeholder {
      color: $input-disabled-placeholder-color;
    }
  }

  @include placeholder {
    color: $input-placeholder-color;
  }

  // [colors]
  @each $name, $pair in $input-color-map {
    $color: nth($pair, 1);
    &.color-#{$name} {
      border-color: $color;

      &:focus,
      &.state-focused,
      &:active,
      &.state-active {
        box-shadow: $input-focus-box-shadow-size rgba($color, 0.25);
      }
    }
  }

  // [sizes]
  &.size-small {
    font-size: $size-small;
  }

  &.size-medium {
    font-size: $size-medium;
  }

  &.size-large {
    font-size: $size-large;
  }

  // [variants]
  &.variant-fullwidth {
    display: block;
    width: 100%;
  }

  &.variant-inline {
    display: inline;
    width: auto;
  }
}
</style>

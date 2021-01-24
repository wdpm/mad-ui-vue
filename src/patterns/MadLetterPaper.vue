<template>
  <div
    class="letter-paper"
    :class="[sizeClass]"
    :style="{
      '--background-y-size': finalLineGap,
      '--line-height': lineHeight,
      '--min-line-height': minLineHeight,
      transform: transform,
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
/**
 * slot mode: just copy text to here and use `<pre>` wrapper
 *
 * prop mode: pass text as prop data
 */

import { sizes, sizeValueMap } from '@/utils/propValidatorHelper'

export default {
  name: 'MadLetterPaper',
  props: {
    lineHeight: {
      type: Number,
      default: 1.5,
      required: false,
    },
    size: {
      type: String,
      default: '',
      required: false,
      validator: function (value) {
        return [...sizes].indexOf(value) !== -1
      },
    },
    noBackground: {
      type: Boolean,
      default: false,
      required: false,
    },
    transform: {
      type: String,
      default: '',
      required: false,
    },
  },
  data() {
    return {}
  },
  mounted() {
    // console.log(this.transform)
  },
  computed: {
    sizeClass() {
      return this.size ? `size-${this.size}` : ''
    },
    minLineHeight() {
      return this.lineHeight + 'em'
    },
    sizeToFontSizeMap() {
      let sizeValueMapCopy = { ...sizeValueMap }
      for (let [key, value] of Object.entries(sizeValueMapCopy)) {
        sizeValueMapCopy[key] = value * 16
      }
      //e.g large: 24 (px)
      return sizeValueMapCopy
    },
    finalLineGap() {
      let lineGap = this.lineHeight * this.sizeToFontSizeMap[this.size]
      // console.log(lineGap, this.lineHeight, this.sizeToFontSizeMap, this.size)
      return lineGap + 'px'
    },
  },
}
</script>

<style scoped lang="scss">
@import 'src/scss/mixins/_all';

.letter-paper {
  //API
  /* default: 16px * line-height = 24px = bg line gap*/
  --background-y-size: 24px; //= (paragraph font-size) * (paragraph line-height) px
  --background-y-gradient-size: calc(var(--background-y-size) - 1px); // 23px
  --line-height: 1.5;
  --min-line-height: 1.5em; //same as line-height, computed

  margin: 0 auto;
  padding: 0 1.25rem;
  //border: 1px solid black;
  width: 640px;
  background: linear-gradient(
    transparent var(--background-y-gradient-size),
    black var(--background-y-size)
  );
  background-size: 100% var(--background-y-size);
  font-size: 1rem;
  transform-origin: center center;

  // basic style
  ::v-deep p,
  ::v-deep pre,
  ::v-deep &-paragraph {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: var(--line-height);
    min-height: var(--min-line-height);
  }

  // sizes
  &.size-small {
    font-size: $size-small;
  }

  &.size-medium {
    font-size: $size-medium;
  }

  &.size-large {
    font-size: $size-large;
  }
}

// optimize readability
// don't use this for english, only use this for other language such as chinese or japanese
::v-deep {
  .letter-spacing {
    letter-spacing: 0.1rem;
  }

  .text-indent {
    text-indent: 2em; /*every p indent 2 key word*/
  }

  .align-right {
    text-align: right;
  }
}
</style>

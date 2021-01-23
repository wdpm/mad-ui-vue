<template>
  <div
    class="reveal-image"
    :class="[activatingClass, rollingBackClass]"
    :style="{
      width: width,
      height: height,
    }"
  >
    <img
      class="reveal-image-figure"
      :src="src"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: 'MadRevealImage',
  props: {
    src: {
      type: String,
      default: '',
      required: true,
    },
    autoPlay: {
      type: Boolean,
      required: false,
    },
    width: {
      type: String,
      default: '640px',
      required: false,
    },
    height: {
      type: String,
      default: '360px',
      required: false,
    },
  },
  data() {
    return {
      activating: false,
      rollingBack: false,
    }
  },
  mounted() {
    this.handleAutoPlay()
  },
  computed: {
    activatingClass() {
      return this.activating ? 'activating' : ''
    },
    rollingBackClass() {
      return this.rollingBack ? 'rolling-back' : ''
    },
  },
  methods: {
    handleAutoPlay() {
      if (this.autoPlay) {
        this.activating = true
      }
    },
    handleMouseEnter() {
      if (!this.autoPlay) {
        this.activating = true
      }
    },
    handleMouseLeave() {
      if (!this.autoPlay) {
        this.activating = false
        this.rollingBack = true

        setTimeout(() => {
          this.rollingBack = false
        }, 1000)
      }
    },
  },
}
</script>

<style scoped lang="scss">
.reveal-image {
  position: relative;
  overflow: hidden;
  width: 640px;
  height: 360px;
  border: 1px solid black;

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 25%;
    top: 0;
    background-color: white;
    z-index: 1; //must elevate z-index
    will-change: height;
  }

  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 25%;
    bottom: 0;
    background-color: white;
    z-index: 1;
    will-change: height;
  }

  &-figure {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 50%;
    transform: translateY(-50%);
  }

  &.activating {
    &::before,
    &::after {
      animation-name: reveal-image;
      animation-timing-function: linear;
      animation-duration: 1s;
      animation-fill-mode: both;
    }
  }

  &.rolling-back {
    &::before,
    &::after {
      animation-name: reveal-image-rollback;
      animation-timing-function: linear;
      animation-duration: 1s;
      animation-fill-mode: both;
    }
  }
}

@keyframes reveal-image {
  from {
    height: 25%;
  }

  to {
    height: 0;
  }
}

@keyframes reveal-image-rollback {
  from {
    height: 0;
  }

  to {
    height: 25%;
  }
}
</style>

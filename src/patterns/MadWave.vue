<template>
  <div
    class="wave"
    :style="{
      width: `${width}px`,
      height: `${height}px`,
    }"
  >
    <canvas id="wave-canvas" class="wave-canvas"></canvas>
    <div class="wave-body">
      <p class="wave-content">{{ text }}</p>
    </div>
  </div>
</template>

<script>
import { SineWave } from '@/utils/SineWave'

export default {
  name: 'MadWave',
  props: {
    width: {
      type: Number,
      default: 800,
      require: false,
    },
    height: {
      type: Number,
      default: 200,
      require: false,
    },
    ease: {
      type: String,
      default: 'SineInOut',
      require: false,
    },
    wavesWidth: {
      type: String,
      default: '120%',
      require: false,
    },
    speed: {
      type: Number,
      default: 3,
      require: false,
    },
    waves: {
      type: Array,
      default: function () {
        return [
          {
            timeModifier: 1, //This is multiplied against `speed`
            lineWidth: 1, // Stroke width
            amplitude: -125, // How tall is the wave
            wavelength: 500, // How long is the wave,
            strokeStyle: 'rgba(255, 0, 0, .5)',
          },
          {
            timeModifier: 1,
            lineWidth: 1,
            amplitude: -125,
            wavelength: 300,
            strokeStyle: 'rgba(0, 255, 0, .5)',
          },
          {
            timeModifier: 1,
            lineWidth: 1,
            amplitude: -125,
            wavelength: 400,
            strokeStyle: 'rgba(0, 0, 255, .5)',
          },
        ]
      },
      require: false,
    },
    text: {
      type: String,
      default: '',
      require: false,
    },
    running: {
      type: Boolean,
      default: true,
      require: false,
    },
  },
  mounted() {
    this.setupWaves()
  },
  methods: {
    setupWaves() {
      let width = this.width
      let height = this.height

      let waves = new SineWave({
        el: document.getElementById('wave-canvas'),
        speed: this.speed,
        width: (el) => {
          return width
        },
        height: (el) => {
          return height
        },
        initialize() {
          // console.log('initialize')
        },
        running: this.running,
        ease: this.ease,
        wavesWidth: this.wavesWidth,
        waves: this.waves,
        resizeEvent: function () {
          // need to update this.width and this.height
          // console.log('debug resizeEvent()')
        },
      })
    },
  },
}
</script>

<style scoped lang="scss">
.wave {
  width: 800px;
  height: 200px;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid black;
  overflow: hidden;

  &-canvas {
    position: absolute;
    z-index: -1;
  }

  &-content {
    font-size: 1.5rem;
  }
}
</style>

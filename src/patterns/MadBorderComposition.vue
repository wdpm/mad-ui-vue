<template>
  <div
    class="border-composition"
    :style="{
      '--border-color': borderColor,
      '--border-width': borderWidth,
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MadBorderComposition',
  props: {
    borderColor: {
      type: String,
      required: false,
      default: 'rgba(0, 0, 0, 0.2)',
    },
    borderWidth: {
      type: String,
      required: false,
      default: '3px',
    },
  },
}
</script>

<style scoped lang="scss">
.border-composition {
  //API
  --border-color: rgba(0, 0, 0, 0.2);
  --border-width: 3px;

  width: fit-content;
  padding: var(--border-width);
  background-repeat: no-repeat;
  background-image: linear-gradient(
      to right,
      var(--border-color) 100%,
      var(--border-color) 100%
    ),
    linear-gradient(
      to bottom,
      var(--border-color) 100%,
      var(--border-color) 100%
    ),
    linear-gradient(
      to right,
      var(--border-color) 100%,
      var(--border-color) 100%
    ),
    linear-gradient(
      to bottom,
      var(--border-color) 100%,
      var(--border-color) 100%
    );
  /* width height */
  background-size: 100% var(--border-width), var(--border-width) 100%,
    100% var(--border-width), var(--border-width) 100%;
  background-position: 0 0, 100% 0, 100% 100%, 0 100%;
  animation: border-composition 1.25s cubic-bezier(0.19, 1, 0.22, 1) 1;
  animation-play-state: paused;

  &:hover {
    animation-play-state: running;
  }
}

@keyframes border-composition {
  0% {
    background-size: 0 var(--border-width), var(--border-width) 0,
      0 var(--border-width), var(--border-width) 0;
  }

  25% {
    background-size: 100% var(--border-width), var(--border-width) 0,
      0 var(--border-width), var(--border-width) 0;
  }

  50% {
    background-size: 100% var(--border-width), var(--border-width) 100%,
      0 var(--border-width), var(--border-width) 0;
  }

  75% {
    background-size: 100% var(--border-width), var(--border-width) 100%,
      100% var(--border-width), var(--border-width) 0;
  }

  100% {
    background-size: 100% var(--border-width), var(--border-width) 100%,
      100% var(--border-width), var(--border-width) 100%;
  }
}
</style>

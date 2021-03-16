<template>
  <div class="mad-circle-ripple-wrapper" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MadCircleRipple',
  methods: {
    handleClick() {
      // creat ripple el
      const ripple = document.createElement('div')
      ripple.classList.add('mad-circle-ripple')
      this.$el.appendChild(ripple)

      // set styles
      ripple.style.top = event.pageY + 'px'
      ripple.style.left = event.pageX + 'px'

      // cleanup
      setTimeout(function () {
        ripple.remove()
      }, 1000)
    },
  },
}
</script>

<style lang="scss">
@import 'src/scss/plugins/circle-ripple';
</style>

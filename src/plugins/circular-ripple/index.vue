<template>
  <div class="mad-ripple-wrapper" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MadCircularRipple',
  methods: {
    onClick(event) {
      // creat ripple el
      const ripple = document.createElement('div')
      ripple.classList.add('mad-circular-ripple')
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
@import 'src/scss/plugins/circular-ripple';
</style>

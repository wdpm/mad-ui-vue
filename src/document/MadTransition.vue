<template>
  <!--  https://v3.vuejs.org/guide/transitions-enterleave.html#javascript-hooks-->
  <transition
    name="mad-expand"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @enter-cancelled="enterCancelled"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    @leave-cancelled="leaveCancelled"
  >
    <slot></slot>
  </transition>
</template>

<script>
/**
 * use transition to encapsulate container animation/transition
 */
export default {
  name: 'MadTransition',
  data() {
    return {
      //
    }
  },
  methods: {
    // --------
    // ENTERING
    // --------

    beforeEnter(el) {
      // ...
    },
    // the done callback is optional when
    // used in combination with CSS
    enter(el, done) {
      // ...
      done()
    },
    afterEnter(el) {
      // ...
    },
    enterCancelled(el) {
      // ...
    },

    // --------
    // LEAVING
    // --------

    beforeLeave(el) {
      // ...
    },
    // the done callback is optional when
    // used in combination with CSS
    leave(el, done) {
      // ...
      done()
    },
    afterLeave(el) {
      // ...
    },
    // leaveCancelled only available with v-show
    leaveCancelled(el) {
      // ...
    },
  },
}
</script>

<style scoped lang="scss">
.mad-expand-enter-active,
.mad-expand-leave-active {
  //
}
</style>

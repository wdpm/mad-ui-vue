<template>
  <h2>basic</h2>
  <mad-circle-ripple>
    <p>some text just text ...</p>
  </mad-circle-ripple>

  <h2>configurable</h2>
  <mad-circle-ripple
    inner-circle-starting-diameter="100px"
    inner-circle-ending-diameter="500px"
    inner-circle-border-color="pink"
    outer-circle-starting-diameter="150px"
    outer-circle-ending-diameter="600px"
    outer-circle-border-color="black"
    background-color="white"
  >
    <!--you should set proper text color because i don't know what you need-->
    <p class="text-black">some text just text ...</p>
  </mad-circle-ripple>
</template>

<script>
import MadCircleRipple from '@/patterns/MadCircleRipple'

export default {
  name: 'MadCircleRippleDemo',
  components: {
    MadCircleRipple,
  },
}
</script>

<style scoped lang="scss">
@import 'src/scss/utilities/text';
</style>

<template>
  <mad-cover :src="require('@/../website/assets/2.jpg').default">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem laborum
      vel, illo necessitatibus distinctio ipsum ratione nihil possimus suscipit,
      nemo sunt beatae, consequatur at ex sequi dolore. Nesciunt, assumenda cum.
    </p>
  </mad-cover>
  <mad-cover :src="require('@/../website/assets/2.jpg').default" reverse>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem laborum
      vel, illo necessitatibus distinctio ipsum ratione nihil possimus suscipit,
      nemo sunt beatae, consequatur at ex sequi dolore. Nesciunt, assumenda cum.
    </div>
    <br />
    <p>other things</p>
  </mad-cover>
</template>

<script>
import MadCover from '@/patterns/MadCover'

export default {
  name: 'MadCoverUsageBasic',
  components: {
    MadCover,
  },
}
</script>

<style scoped></style>

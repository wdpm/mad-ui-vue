<template>
  <h2>default three orbit mode</h2>
  <mad-orbit-spinner :size="200" />

  <h2>single orbit mode</h2>
  <mad-orbit-spinner :size="200" single />
</template>

<script>
import MadOrbitSpinner from '@/elements/MadOrbitSpinner'

export default {
  name: 'MadOrbitSpinnerDemo',
  components: {
    MadOrbitSpinner,
  },
}
</script>

<style scoped></style>

<template>
  <h2>basic</h2>
  <mad-select></mad-select>

  <h2>sizes</h2>
  <mad-select v-for="size in sizes" :key="size" :size="size"></mad-select>
</template>

<script>
import MadSelect from '@/form/MadSelect'
import { sizes } from '@/utils'

export default {
  name: 'MadSelectDemo',
  components: { MadSelect },
  data() {
    return {
      sizes: sizes,
    }
  },
}
</script>

<style scoped></style>

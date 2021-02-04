<template>
  <mad-select v-for="size in sizes" :key="size" :size="size">
    <select>
      <option>Select dropdown</option>
      <option>With options</option>
    </select>
  </mad-select>
</template>

<script>
import MadSelect from '@/form/MadSelect'
import { sizes } from '@/utils/propValidateHelper'

export default {
  name: 'MadSelectUsageSize',
  components: { MadSelect },
  data() {
    return {
      sizes: sizes,
    }
  },
}
</script>

<style scoped></style>

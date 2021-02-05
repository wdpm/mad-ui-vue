<template>
  <mad-grid
    row="10"
    column="40"
    border-color="pink"
    background-color="#fafafa"
    square-width="20px"
  ></mad-grid>
</template>

<script>
import MadGrid from '@/patterns/MadGrid'

export default {
  name: 'MadGridUsageCustom',
  components: {
    MadGrid,
  },
}
</script>

<style scoped></style>

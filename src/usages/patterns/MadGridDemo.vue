<template>
  <h2>basic</h2>
  <mad-grid></mad-grid>

  <h2>configurable</h2>
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
  name: 'MadGridDemo',
  components: {
    MadGrid,
  },
}
</script>

<style scoped></style>

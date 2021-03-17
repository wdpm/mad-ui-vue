<template>
  <mad-header>
    <a href="#" class="logo">logo</a>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Portfolio</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </mad-header>
</template>

<script>
import MadHeader from '@/components/MadHeader'

export default {
  name: 'MadHeaderUsageBasic',
  components: {
    MadHeader,
  },
}
</script>

<style scoped></style>

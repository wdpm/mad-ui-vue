<template>
  <mad-breadcrumb alignment="">
    <ul>
      <li><a href="#">MadUI</a></li>
      <li><a href="#">Documentation</a></li>
      <li><a href="#">Components</a></li>
      <li><a href="#">Breadcrumb</a></li>
    </ul>
  </mad-breadcrumb>
  <mad-breadcrumb alignment="centered">
    <ul>
      <li><a href="#">MadUI</a></li>
      <li><a href="#">Documentation</a></li>
      <li><a href="#">Components</a></li>
      <li><a href="#">Breadcrumb</a></li>
    </ul>
  </mad-breadcrumb>
  <mad-breadcrumb alignment="right">
    <ul>
      <li><a href="#">MadUI</a></li>
      <li><a href="#">Documentation</a></li>
      <li><a href="#">Components</a></li>
      <li><a href="#">Breadcrumb</a></li>
    </ul>
  </mad-breadcrumb>
</template>

<script>
import MadBreadcrumb from '@/components/MadBreadcrumb'

export default {
  name: 'MadBreadcrumbUsageAlignment',
  components: {
    MadBreadcrumb,
  },
}
</script>

<style scoped></style>

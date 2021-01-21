<template>
  <h2>basic</h2>
  <mad-breadcrumb>
    <ul>
      <li><a href="#">MadUI</a></li>
      <li><a href="#">Documentation</a></li>
      <li><a href="#">Components</a></li>
      <li><a href="#">Breadcrumb</a></li>
    </ul>
  </mad-breadcrumb>

  <h2>alignment</h2>
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

  <h2>sizes</h2>
  <mad-breadcrumb size="small">
    <ul>
      <li><a href="#">MadUI</a></li>
      <li><a href="#">Documentation</a></li>
      <li><a href="#">Components</a></li>
      <li><a href="#">Breadcrumb</a></li>
    </ul>
  </mad-breadcrumb>
  <mad-breadcrumb size="medium">
    <ul>
      <li><a href="#">MadUI</a></li>
      <li><a href="#">Documentation</a></li>
      <li><a href="#">Components</a></li>
      <li><a href="#">Breadcrumb</a></li>
    </ul>
  </mad-breadcrumb>
  <mad-breadcrumb size="large">
    <ul>
      <li><a href="#">MadUI</a></li>
      <li><a href="#">Documentation</a></li>
      <li><a href="#">Components</a></li>
      <li><a href="#">Breadcrumb</a></li>
    </ul>
  </mad-breadcrumb>

  <h2>separators</h2>
  <mad-breadcrumb separator="arrow">
    <ul>
      <li><a href="#">MadUI</a></li>
      <li><a href="#">Documentation</a></li>
      <li><a href="#">Components</a></li>
    </ul>
  </mad-breadcrumb>
</template>

<script>
import MadBreadcrumb from '@/components/MadBreadcrumb'

export default {
  name: 'MadBreadcrumbDemo',
  components: {
    MadBreadcrumb,
  },
}
</script>

<style scoped></style>

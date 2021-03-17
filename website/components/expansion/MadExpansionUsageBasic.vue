<template>
  <mad-expansion>
    <template v-slot:header>expansion header</template>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab blanditiis
    culpa doloribus eaque earum fugiat ipsam nam, numquam perspiciatis, quo
    recusandae rem, temporibus? Eaque earum laudantium perferendis quam ullam?
  </mad-expansion>
</template>

<script>
import MadExpansion from '@/components/MadExpansion'

export default {
  name: 'MadExpansionUsageBasic',
  components: {
    MadExpansion,
  },
}
</script>

<style scoped></style>

<template>
  <mad-delete :size="'small'"></mad-delete>
  <mad-delete></mad-delete>
  <mad-delete :size="'medium'"></mad-delete>
  <mad-delete :size="'large'"></mad-delete>
</template>

<script>
import MadDelete from '@/elements/MadDelete'

export default {
  name: 'MadDeleteUsageSize',
  components: {
    MadDelete,
  },
}
</script>

<style scoped></style>

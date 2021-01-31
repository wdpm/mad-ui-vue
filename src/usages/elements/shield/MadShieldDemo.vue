<template>
  <mad-shield :title="'shield'" :content="123" />
  <mad-shield :title="'shield'" :content="'text'" />
</template>

<script>
import MadShield from '@/elements/MadShield'

export default {
  name: 'MadShieldDemo',
  components: {
    MadShield,
  },
}
</script>

<style scoped></style>

<template>
  <mad-input-add-on>
    <span class="input-add-on-item">A</span>
    <mad-input class="input-add-on-field" />
  </mad-input-add-on>
</template>

<script>
import MadInputAddOn from '@/form/MadInputAddOn'
import MadInput from '@/form/MadInput'

export default {
  name: 'MadInputAddOnUsagePrepend',
  components: {
    MadInputAddOn,
    MadInput,
  },
}
</script>

<style scoped></style>

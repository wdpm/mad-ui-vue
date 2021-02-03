<template>
  <mad-input-add-on>
    <mad-input class="input-add-on-field" />
    <button class="input-add-on-item">search</button>
  </mad-input-add-on>
</template>

<script>
import MadInputAddOn from '@/form/MadInputAddOn'
import MadInput from '@/form/MadInput'

export default {
  name: 'MadInputAddOnUsageAppend.vue',
  components: {
    MadInputAddOn,
    MadInput,
  },
}
</script>

<style scoped></style>

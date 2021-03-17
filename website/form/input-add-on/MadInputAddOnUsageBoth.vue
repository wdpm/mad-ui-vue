<template>
  <mad-input-add-on>
    <span class="input-add-on-item">A</span>
    <mad-input class="input-add-on-field" />
    <button class="input-add-on-item">B</button>
  </mad-input-add-on>
</template>

<script>
import MadInputAddOn from '@/form/MadInputAddOn'
import MadInput from '@/form/MadInput'

export default {
  name: 'MadInputAddOnUsageBoth',
  components: {
    MadInputAddOn,
    MadInput,
  },
}
</script>

<style scoped></style>

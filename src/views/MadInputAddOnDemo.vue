<template>
  <h2>appending</h2>
  <mad-input-add-on>
    <mad-input class="input-add-on-field" />
    <button class="input-add-on-item">search</button>
  </mad-input-add-on>

  <h2>prepending</h2>
  <mad-input-add-on>
    <span class="input-add-on-item">A</span>
    <mad-input class="input-add-on-field" />
  </mad-input-add-on>

  <h2>both</h2>
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
  name: 'MadInputAddOnDemo',
  components: {
    MadInputAddOn,
    MadInput,
  },
}
</script>

<style scoped></style>

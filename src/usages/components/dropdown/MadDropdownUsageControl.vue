<template>
  <mad-dropdown control-by-js class="margin-bottom-300">
    <template v-slot:dropdown-trigger>
      <mad-button aria-controls="dropdown-content">
        <span>Dropdown button</span>
        <mad-icon><i class="arrow down"></i></mad-icon>
      </mad-button>
    </template>
    <template v-slot:dropdown-content>
      <a href="#" class="dropdown-item"> Dropdown item </a>
      <a class="dropdown-item"> Other dropdown item </a>
      <a href="#" class="dropdown-item"> dropdown item </a>
      <a href="#" class="dropdown-item"> Other dropdown item with long text</a>
      <hr/>
      <a href="#" class="dropdown-item"> With a divider </a>
    </template>
  </mad-dropdown>
</template>

<script>
import MadDropdown from '@/components/MadDropdown'
import MadButton from '@/elements/MadButton'
import MadIcon from '@/elements/MadIcon'

export default {
  name: 'MadDropdownUsageControl',
  components: {
    MadDropdown,
    MadIcon,
    MadButton,
  },
}
</script>

<style scoped lang="scss">
.margin-left-300 {
  margin-left: 300px;
}

.margin-bottom-300 {
  margin-bottom: 300px;
}
</style>

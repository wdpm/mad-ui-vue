<template>
  <div class="dropdown">
    <div class="dropdown-trigger">
      <mad-button aria-controls="dropdown-menu">
        <span>Dropdown button</span>
        <span class="icon">
          <i class="arrow"></i>
        </span>
        <!--        <span class="icon is-small">-->
        <!--          <i class="fas fa-angle-down" aria-hidden="true"></i>-->
        <!--        </span>-->
      </mad-button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <a href="#" class="dropdown-item"> Dropdown item </a>
        <a class="dropdown-item"> Other dropdown item </a>
        <a href="#" class="dropdown-item"> Active dropdown item </a>
        <a href="#" class="dropdown-item"> Other dropdown item </a>
        <hr class="dropdown-divider" />
        <a href="#" class="dropdown-item"> With a divider </a>
      </div>
    </div>
  </div>
</template>

<script>
import MadButton from '@/elements/MadButton'

/**
 * An interactive dropdown menu for discoverable content
 */
export default {
  name: 'MadDropdown',
  components: {
    MadButton,
  },
}
</script>

<style scoped lang="scss"></style>

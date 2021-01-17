<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal">
        <div class="modal-header">
          <slot name="header">default header</slot>
        </div>

        <div class="modal-body">
          <slot name="body">default body</slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            default footer
            <br />
            <mad-button class="modal-button-cancel" @click="$emit('cancel')">
              Cancel
            </mad-button>
            <mad-button class="modal-button-ok" @click="$emit('ok')"
              >OK
            </mad-button>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import MadButton from '@/elements/MadButton'

/**
 * refer impl: https://v3.vuejs.org/examples/modal.html
 */
export default {
  name: 'MadModal',
  components: { MadButton },
}
</script>

<style lang="scss">
// or use vue3 teleport to body
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;

  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
}

.modal-body {
  margin: 20px 0;
}

.modal-button-ok,
.modal-button-cancel {
  display: inline-block;
  margin-top: 1rem;
}
</style>

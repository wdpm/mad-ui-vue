<template>
  <button id="show-modal" @click="showModal = true">Show Modal</button>
  <!-- use the modal component, pass in the prop -->
  <mad-modal v-if="showModal" @ok="handleOK" @cancel="handleCancel">
    <!--
      you can use custom content here to overwrite
      default content
    -->
    <template v-slot:header>
      <h3>custom header</h3>
    </template>
    <template v-slot:body>
      <h3>custom body</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa
        expedita id nostrum officia perspiciatis similique suscipit veniam
        voluptas? Officia!
      </p>
    </template>
  </mad-modal>
</template>

<script>
import MadModal from '@/components/MadModal'

export default {
  name: 'MadModalDemo',
  components: {
    MadModal,
  },
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    // bind your logic here
    handleOK() {
      this.showModal = false
    },
    handleCancel() {
      this.showModal = false
    },
  },
}
</script>

<style scoped></style>

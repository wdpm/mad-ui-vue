<template>
  <div class="home"></div>
  <mad-input-add-on-demo />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'
import MadInputDemo from '@/views/MadInputDemo.vue'
import MadInputAddOnDemo from '@/views/MadInputAddOnDemo.vue'

@Options({
  components: {
    HelloWorld,
    MadInputAddOnDemo,
  },
})
export default class Home extends Vue {}
</script>

<template>
  <div class="home"></div>
    <mad-dropdown-demo />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'
import MadDropdownDemo from '@/views/MadDropdownDemo.vue'

@Options({
  components: {
    HelloWorld,
    MadDropdownDemo,
  },
})
export default class Home extends Vue {}
</script>

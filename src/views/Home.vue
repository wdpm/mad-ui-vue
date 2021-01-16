<template>
  <div class="home"></div>
  <mad-menu-demo />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'
import MadDropdownDemo from '@/views/MadDropdownDemo.vue'
import MadMenuDemo from '@/views/MadMenuDemo.vue'

@Options({
  components: {
    HelloWorld,
    MadMenuDemo,
  },
})
export default class Home extends Vue {}
</script>

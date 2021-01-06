<template>
  <div class="home"></div>
  <h2>no value</h2>
  <mad-progress-bar></mad-progress-bar>

  <h2>custom max value</h2>
  <mad-progress-bar :max="200" :value="50"></mad-progress-bar>

  <h2>with value</h2>
  <mad-progress-bar :value="40"></mad-progress-bar>

  <h2>colors</h2>
  <!--colors-->
  <mad-progress-bar
    v-for="value in colorMapValuesNoLight"
    :key="value"
    :value="40"
    :color="value"
  ></mad-progress-bar>

  <h2>sizes</h2>
  <mad-progress-bar
    v-for="size in sizes"
    :key="size"
    :value="40"
    :size="size"
  ></mad-progress-bar>

  <h2>indeterminate</h2>
  <mad-progress-bar></mad-progress-bar>

  <h2>indeterminate with color</h2>
  <mad-progress-bar
    v-for="value in colorMapValuesNoLight"
    :key="value"
    :color="value"
  ></mad-progress-bar>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'
import MadProgressBar from '@/elements/MadProgressBar.vue'
import { colorMapValuesNoLight, sizes } from '@/utils'

const exclusives = ['light', 'white']

@Options({
  components: {
    HelloWorld,
    MadProgressBar,
  },
})
export default class Home extends Vue {
  colorMapValuesNoLight: string[] = colorMapValuesNoLight
  sizes: string[] = sizes
}
</script>

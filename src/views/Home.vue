<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <hr />
    <mad-block>block 1 text</mad-block>
    <mad-block>block 2 text</mad-block>
    <hr />
    <mad-title :level="2">hello</mad-title>
    <hr />
    <mad-box>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid
        consequatur deserunt et labore, modi nam nobis officiis reprehenderit
        repudiandae velit, voluptas, voluptate voluptatem? Ex iusto labore
        praesentium. Doloremque, vel?
      </p>
    </mad-box>
    <mad-box :tag="'a'">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid
        consequatur deserunt et labore, modi nam nobis officiis reprehenderit
        repudiandae velit, voluptas, voluptate voluptatem? Ex iusto labore
        praesentium. Doloremque, vel?
      </p>
    </mad-box>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import MadBlock from '@/elements/MadBlock.vue'
import MadTitle from '@/elements/MadTitle.vue'
import MadBox from '@/elements/MadBox.vue'

@Options({
  components: {
    HelloWorld,
    MadBlock,
    MadTitle,
    MadBox,
  },
})
export default class Home extends Vue {}
</script>

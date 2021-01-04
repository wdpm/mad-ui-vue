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
    <hr />
    <mad-button>button</mad-button>
    <mad-button :tag="'a'" disabled>a disabled</mad-button>
    <mad-button :tag="'a'">a</mad-button>
    <mad-button :tag="'input'" type="submit" value="submit button"></mad-button>
    <hr />
    <mad-button :size="'small'">small</mad-button>
    <mad-button :size="''">normal</mad-button>
    <mad-button :size="'normal'">normal</mad-button>
    <mad-button :size="'medium'">medium</mad-button>
    <mad-button :size="'large'">large</mad-button>
    <hr />
    <mad-button :color="'white'">white</mad-button>
    <mad-button :color="'light'">light</mad-button>
    <mad-button :color="'dark'">dark</mad-button>
    <mad-button :color="'black'">black</mad-button>
    <mad-button :color="'text'">text</mad-button>
    <mad-button :color="'primary'">primary</mad-button>
    <mad-button :color="'info'">info</mad-button>
    <mad-button :color="'success'">success</mad-button>
    <mad-button :color="'warning'">warning</mad-button>
    <mad-button :color="'danger'">danger</mad-button>
    <hr />
    <mad-button :color="'primary'" is-light>primary</mad-button>
    <mad-button :color="'info'" is-light>info</mad-button>
    <mad-button :color="'success'" is-light>success</mad-button>
    <mad-button :color="'warning'" is-light>warning</mad-button>
    <mad-button :color="'danger'" is-light>danger</mad-button>
    <hr />
    <mad-button is-fullwidth :size="'small'">small fullwidth</mad-button>
    <mad-button is-fullwidth :size="'large'">large fullwidth</mad-button>
    <hr />
    <mad-button :color="'primary'" is-outlined>primary</mad-button>
    <mad-button :color="'info'" is-outlined>info</mad-button>
    <mad-button :color="'success'" is-outlined>success</mad-button>
    <mad-button :color="'warning'" is-outlined>warning</mad-button>
    <mad-button :color="'danger'" is-outlined>danger</mad-button>
    <hr />
    <mad-button :color="'danger'" is-rounded>danger</mad-button>
    <hr />
    <mad-button disabled>disabled</mad-button>
    <mad-button :color="'danger'" disabled>danger disabled</mad-button>
    <mad-button :color="'success'" disabled>success disabled</mad-button>
    <hr />
    <!--you should know original image respect ratio, set ratio and set fixed width-->
    <mad-image
      :src="'https://cdn.vuetifyjs.com/images/parallax/material.jpg'"
      :size="'16by9'"
      :width="'300px'"
    ></mad-image>
    <hr />
    <!-- if set fixed height-->
    <mad-image
      :src="'https://cdn.vuetifyjs.com/images/parallax/material.jpg'"
      :size="'16by9'"
      :height="'200px'"
    ></mad-image>
    <!-- if set fixed height and max-width-->
    <mad-image
      :src="'https://cdn.vuetifyjs.com/images/parallax/material.jpg'"
      :size="'16by9'"
      :height="'180px'"
      :max-width="'400px'"
    ></mad-image>
    <p>text</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import MadBlock from '@/elements/MadBlock.vue'
import MadTitle from '@/elements/MadTitle.vue'
import MadBox from '@/elements/MadBox.vue'
import MadButton from '@/elements/MadButton.vue'
import MadImage from '@/elements/MadImage.vue'

@Options({
  components: {
    HelloWorld,
    MadBlock,
    MadTitle,
    MadBox,
    MadButton,
    MadImage,
  },
})
export default class Home extends Vue {}
</script>

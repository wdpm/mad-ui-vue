<template>
  <div class="home">
    <h2>normal</h2>
    <mad-notification>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
      architecto, deserunt expedita nostrum odit quam. Laboriosam, laborum,
      praesentium. Ab debitis error magni minus odit, officiis ratione sequi sit
      veniam vitae?
    </mad-notification>

    <h2>normal with code</h2>
    <mad-notification>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
      architecto, deserunt expedita nostrum odit quam. Laboriosam, laborum,
      praesentium. Ab debitis error magni minus odit, officiis ratione sequi sit
      veniam vitae?
      <pre>
        function foo(){
            console.log("hello");
        }
      </pre>
    </mad-notification>

    <h2>colors</h2>
    <!--'', 'white', 'black', 'light', 'dark', 'primary', 'info', 'success', 'warning', 'danger'-->
    <mad-notification :color="'white'">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
    </mad-notification>
    <mad-notification :color="'black'">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
    </mad-notification>
    <mad-notification :color="'light'">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
    </mad-notification>
    <mad-notification :color="'dark'">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
    </mad-notification>
    <mad-notification :color="'primary'">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
    </mad-notification>
    <mad-notification :color="'info'">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
    </mad-notification>
    <mad-notification :color="'success'">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
    </mad-notification>
    <mad-notification :color="'warning'">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
    </mad-notification>
    <mad-notification :color="'danger'">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
    </mad-notification>

    <h2>variants</h2>
    <!--variants light & dark version-->
    <mad-notification :color="'primary'" :variant="'light'">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
    </mad-notification>
    <mad-notification :color="'primary'" :variant="'dark'">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
    </mad-notification>
    <mad-notification :color="'info'" :variant="'light'">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
    </mad-notification>
    <mad-notification :color="'info'" :variant="'dark'">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
    </mad-notification>
    <mad-notification :color="'success'" :variant="'light'">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
    </mad-notification>
    <mad-notification :color="'success'" :variant="'dark'">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
    </mad-notification>
    <mad-notification :color="'warning'" :variant="'light'">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
    </mad-notification>
    <mad-notification :color="'warning'" :variant="'dark'">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
    </mad-notification>
    <mad-notification :color="'danger'" :variant="'light'">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
    </mad-notification>
    <mad-notification :color="'danger'" :variant="'dark'">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
    </mad-notification>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'
import MadNotification from '@/elements/MadNotification.vue'

@Options({
  components: {
    HelloWorld,
    MadNotification,
  },
})
export default class Home extends Vue {}
</script>

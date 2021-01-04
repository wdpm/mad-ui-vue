<template>
  <div class="home">
    <p>hello</p>
    <!--    <mad-notification></mad-notification>-->
    <!-- normal-->
    <mad-delete></mad-delete>

    <!--sizes-->
    <mad-delete :size="'small'"></mad-delete>
    <mad-delete></mad-delete>
    <mad-delete :size="'medium'"></mad-delete>
    <mad-delete :size="'large'"></mad-delete>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'
import MadNotification from '@/elements/MadNotification.vue'
import MadDelete from '@/elements/MadDelete.vue'

@Options({
  components: {
    HelloWorld,
    MadNotification,
    MadDelete,
  },
})
export default class Home extends Vue {}
</script>

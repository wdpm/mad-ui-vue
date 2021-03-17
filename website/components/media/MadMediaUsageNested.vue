<template>
  <mad-media>
    <template v-slot:figure>
      <img width="60" src="//placehold.it/100&text=item" alt="" />
    </template>

    <h3>standard media object</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac nisl
      quis massa vulputate adipiscing. Vivamus sit amet risus ligula. Nunc eu
      pulvinar augue.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac nisl
      quis massa vulputate adipiscing. Vivamus sit amet risus ligula. Nunc eu
      pulvinar augue.
    </p>

    <!--nested content-->
    <mad-media>
      <template v-slot:figure>
        <img src="//placehold.it/60&text=item" alt="" />
      </template>

      <h3>standard media object</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
        nisl quis massa vulputate adipiscing. Vivamus sit amet risus ligula.
        Nunc eu pulvinar augue.
      </p>
    </mad-media>
  </mad-media>
</template>

<script>
import MadMedia from '@/components/MadMedia'

export default {
  name: 'MadMediaUsageNested',
  components: {
    MadMedia,
  },
}
</script>

<style scoped></style>

<template>
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
</template>

<script>
import MadButton from '@/elements/MadButton'

export default {
  name: 'MadButtonDemo',
  components: {
    MadButton,
  },
}
</script>

<style scoped></style>

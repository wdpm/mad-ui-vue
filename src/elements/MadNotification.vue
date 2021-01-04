<template>
  <div class="notification">
    <button class="delete"></button>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
    architecto, deserunt expedita nostrum odit quam. Laboriosam, laborum,
    praesentium. Ab debitis error magni minus odit, officiis ratione sequi sit
    veniam vitae?
  </div>
</template>

<script>
export default {
  name: 'MadNotification',
  props: {
    hasDeleteButton: {
      type: Boolean,
      default: true,
      required: false,
    },
  },
}
</script>

<style scoped lang="scss"></style>

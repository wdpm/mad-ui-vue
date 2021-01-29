<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
@import './scss/base/_all';

// use this way to import highlight.css
@import './../node_modules/highlight.js/styles/github.css';
</style>
